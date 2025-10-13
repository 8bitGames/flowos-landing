# Google Apps Script 설정 가이드 (이메일 전송 포함)

## 📋 Apps Script 코드

다음 코드를 Google Apps Script 편집기에 붙여넣으세요:

```javascript
// ==================== 설정 ====================
// 담당자 이메일 주소 (문의 알림을 받을 이메일)
const MANAGER_EMAIL = 'anton@flowos.work';

// ==================== 데이터 검증 및 정규화 ====================
function validateAndCleanData(data) {
  // 필수 필드 확인
  var requiredFields = ['name', 'email', 'company', 'phone', 'message'];
  for (var i = 0; i < requiredFields.length; i++) {
    var field = requiredFields[i];
    if (!data[field] || data[field].toString().trim() === '') {
      throw new Error('필수 필드 누락: ' + field);
    }
  }

  // 이메일 주소 정규화 및 검증
  var email = data.email.toString().trim().toLowerCase();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('잘못된 이메일 형식: ' + data.email);
  }

  // 정규화된 데이터 반환
  return {
    name: data.name.toString().trim(),
    email: email,
    company: data.company.toString().trim(),
    phone: data.phone.toString().trim(),
    website: data.website ? data.website.toString().trim() : '',
    message: data.message.toString().trim(),
    timestamp: data.timestamp || new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
  };
}

// ==================== 메인 함수 ====================
function doPost(e) {
  try {
    // 스프레드시트 가져오기
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // POST로 전송된 JSON 데이터 파싱
    var rawData = JSON.parse(e.postData.contents);
    Logger.log('📥 Received data: ' + JSON.stringify(rawData));

    // 데이터 검증 및 정규화
    var data = validateAndCleanData(rawData);
    Logger.log('✅ Data validated and cleaned');

    // 현재 데이터 행 수 확인 (Index 계산용)
    var lastRow = sheet.getLastRow();
    var index = lastRow > 0 ? lastRow : 1;

    // A열: Index (자동 카운팅), B열부터 실제 데이터
    // 전화번호 앞에 작은따옴표(')를 추가하여 텍스트로 강제 저장
    sheet.appendRow([
      index,              // A열: Index
      data.name,          // B열: 이름
      data.company,       // C열: 회사명
      data.email,         // D열: 이메일
      "'" + data.phone,   // E열: 전화번호 (앞에 ' 추가하여 텍스트로 저장)
      data.website,       // F열: 웹사이트 (선택)
      data.message,       // G열: 문의 내용
      data.timestamp      // H열: 제출 시간
    ]);
    Logger.log('💾 Data saved to spreadsheet successfully');

    // 이메일 전송 결과 추적
    var emailResults = {
      manager: false,
      customer: false,
      managerError: null,
      customerError: null
    };

    // 담당자에게 알림 이메일 전송
    try {
      Logger.log('📧 Sending manager notification to: ' + MANAGER_EMAIL);
      sendNotificationToManager(data);
      emailResults.manager = true;
      Logger.log('✅ Manager notification email sent successfully');
    } catch(emailError) {
      emailResults.managerError = emailError.toString();
      Logger.log('❌ Failed to send manager notification: ' + emailError.toString());
      Logger.log('   Stack: ' + emailError.stack);
    }

    // Rate limiting 방지를 위한 1초 대기
    Logger.log('⏳ Waiting 1 second before sending customer email...');
    Utilities.sleep(1000);

    // 문의자에게 감사 이메일 전송
    try {
      Logger.log('📧 Sending thank you email to: ' + data.email);
      sendThankYouEmail(data);
      emailResults.customer = true;
      Logger.log('✅ Thank you email sent successfully');
    } catch(emailError) {
      emailResults.customerError = emailError.toString();
      Logger.log('❌ Failed to send thank you email: ' + emailError.toString());
      Logger.log('   Stack: ' + emailError.stack);
      Logger.log('   Email address: ' + data.email);
    }

    // 상세한 성공 응답 반환
    var responseMessage = '문의가 성공적으로 접수되었습니다.';

    if (emailResults.manager && emailResults.customer) {
      responseMessage += ' 확인 이메일을 보내드렸습니다.';
    } else if (emailResults.manager && !emailResults.customer) {
      responseMessage += ' 다만, 확인 이메일 전송에 문제가 있었습니다. 스팸함을 확인해주세요.';
    } else if (!emailResults.manager && emailResults.customer) {
      responseMessage += ' 확인 이메일을 보내드렸습니다.';
    } else {
      responseMessage += ' 다만, 이메일 전송에 문제가 있었습니다.';
    }

    Logger.log('📊 Email Results - Manager: ' + emailResults.manager + ', Customer: ' + emailResults.customer);

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: responseMessage,
      emailsSent: {
        manager: emailResults.manager,
        customer: emailResults.customer
      }
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    Logger.log('❌ Critical error in doPost: ' + error.toString());
    Logger.log('   Stack: ' + error.stack);

    // 에러 발생 시 에러 응답 반환
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: '문의 접수 중 오류가 발생했습니다: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ==================== 담당자 알림 이메일 ====================
function sendNotificationToManager(data) {
  var subject = '[FlowOS 문의] ' + data.company + ' - ' + data.name + '님의 문의';

  var htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #00268B 0%, #0099CC 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; }
        .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .info-table td { padding: 12px; border-bottom: 1px solid #f0f0f0; }
        .info-table td:first-child { font-weight: bold; color: #00268B; width: 120px; }
        .message-box { background: #f8f9fa; border-left: 4px solid #0099CC; padding: 20px; margin: 20px 0; border-radius: 4px; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 10px 10px; }
        .timestamp { color: #999; font-size: 14px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔔 새로운 문의가 접수되었습니다</h1>
        </div>
        <div class="content">
          <h2 style="color: #00268B; margin-top: 0;">문의자 정보</h2>
          <table class="info-table">
            <tr><td>이름</td><td>${data.name}</td></tr>
            <tr><td>회사명</td><td>${data.company}</td></tr>
            <tr><td>이메일</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td>전화번호</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
            <tr><td>웹사이트</td><td>${data.website || '미입력'}</td></tr>
          </table>

          <h2 style="color: #00268B;">문의 내용</h2>
          <div class="message-box">
            ${data.message.replace(/\n/g, '<br>')}
          </div>

          <div class="timestamp">
            📅 제출 시간: ${data.timestamp}
          </div>
        </div>
        <div class="footer">
          <p>FlowOS Contact Form | <a href="https://www.flowos.work">www.flowos.work</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  MailApp.sendEmail({
    to: MANAGER_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

// ==================== 문의자 감사 이메일 ====================
function sendThankYouEmail(data) {
  var subject = '[FlowOS] 문의 접수가 완료되었습니다.';

  var htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f7fa;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #00268B 0%, #0099CC 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 28px;
          font-weight: 600;
        }
        .header p {
          margin: 0;
          font-size: 16px;
          opacity: 0.9;
        }
        .content {
          background: #ffffff;
          padding: 40px 30px;
        }
        .greeting {
          font-size: 18px;
          color: #00268B;
          margin-bottom: 24px;
          font-weight: 600;
        }
        .intro {
          margin: 24px 0;
          color: #555;
          font-size: 15px;
          line-height: 1.8;
        }
        .highlight-box {
          background: linear-gradient(to right, #f0f7ff 0%, #e6f3ff 100%);
          border-left: 4px solid #0099CC;
          padding: 24px;
          margin: 24px 0;
          border-radius: 8px;
        }
        .highlight-box p {
          margin: 0;
          font-size: 15px;
          line-height: 1.8;
        }
        .highlight-box strong {
          color: #00268B;
          font-size: 16px;
        }
        .message-section {
          margin: 30px 0;
        }
        .message-section p {
          margin: 12px 0;
          font-size: 15px;
          line-height: 1.8;
        }
        .services-section {
          margin: 30px 0;
          padding: 24px;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .services-section h3 {
          color: #00268B;
          font-size: 18px;
          margin: 0 0 16px 0;
          font-weight: 600;
        }
        .services-section ul {
          line-height: 2.0;
          padding-left: 24px;
          margin: 0;
        }
        .services-section li {
          margin: 8px 0;
          color: #444;
        }
        .pdf-section {
          background: linear-gradient(135deg, #00268B 0%, #0099CC 100%);
          color: white;
          padding: 24px;
          margin: 30px 0;
          border-radius: 8px;
          text-align: center;
        }
        .pdf-section h3 {
          margin: 0 0 12px 0;
          font-size: 18px;
          font-weight: 600;
        }
        .pdf-button {
          display: inline-block;
          background: white;
          color: #00268B;
          padding: 12px 28px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          margin-top: 8px;
          transition: transform 0.2s;
        }
        .pdf-button:hover {
          transform: translateY(-2px);
        }
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e0e0e0, transparent);
          margin: 30px 0;
        }
        .footer {
          background: #f8f9fa;
          padding: 30px;
          text-align: center;
          border-radius: 0 0 12px 12px;
        }
        .footer-logo {
          margin-bottom: 20px;
        }
        .footer-logo img {
          width: 140px;
          height: auto;
        }
        .contact-info {
          margin: 16px 0;
        }
        .contact-info p {
          margin: 8px 0;
          font-size: 14px;
          color: #666;
        }
        .contact-info a {
          color: #0099CC;
          text-decoration: none;
          font-weight: 500;
        }
        .contact-info a:hover {
          text-decoration: underline;
        }
        .footer-note {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
          font-size: 13px;
          color: #999;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✉️ 문의 접수 완료</h1>
          <p>FlowOS에 관심 가져주셔서 감사합니다</p>
        </div>

        <div class="content">
          <div class="greeting">
            ${data.name} 님, 안녕하세요
          </div>

          <div class="intro">
            <p>기업이 보유한 데이터를 구조화 및 자산화하고, 효율적인 워크플로우를 제안하는 <strong>FlowOS</strong>입니다.</p>
          </div>

          <div class="highlight-box">
            <p>📩 공식 채널을 통해 남겨주신 문의가 <strong>정상적으로 접수</strong>되었습니다.</p>
            <p style="margin-top: 12px;">담당자 검토 후 <strong>6시간 이내</strong>에 연락드리겠습니다.</p>
          </div>

          <div class="message-section">
            <p>문의에 진심으로 감사드리며, 정성을 다해 도움드리겠습니다.</p>
            <p>추가 문의사항이 있으시면 언제든지 연락주세요 😊</p>
          </div>

          <div class="divider"></div>

          <div class="services-section">
            <h3>🎯 주요 서비스</h3>
            <ul>
              <li>기업 데이터 구조화 및 자산화</li>
              <li>업무 프로세스 컨설팅 및 최적화</li>
              <li>AI 기반 워크플로우 설계 및 구축</li>
              <li>맞춤형 업무 시스템 개발 및 운영</li>
            </ul>
          </div>

          <div class="pdf-section">
            <h3>📄 서비스 소개서</h3>
            <p style="margin: 8px 0; font-size: 14px; opacity: 0.9;">FlowOS의 상세한 서비스 내용을 확인하세요</p>
            <a href="https://featpaper.com/l/cqcHs4v1" target="_blank" class="pdf-button">
              소개서 다운로드 →
            </a>
          </div>
        </div>

        <div class="footer">
          <div class="footer-logo">
            <img src="https://www.flowos.work/logo/flowos-logo.png" alt="FlowOS Logo" />
          </div>

          <div class="contact-info">
            <p><strong>📧 이메일</strong> <a href="mailto:anton@flowos.work">anton@flowos.work</a></p>
            <p><strong>🌐 웹사이트</strong> <a href="https://www.flowos.work" target="_blank">www.flowos.work</a></p>
          </div>

          <div class="footer-note">
            <p><strong>FlowOS</strong> - Work in Flow, Where Data Meets AI</p>
            <p>우리는 기업이 스스로 데이터로 일할 수 있는 운영 체계를 구축합니다.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody
  });
}
```

## 🔧 배포 설정

### 1️⃣ Google Sheets 열기
   - 데이터를 저장할 스프레드시트를 엽니다
   - 상단 메뉴: **확장 프로그램** → **Apps Script**

### 2️⃣ 코드 붙여넣기
   - 위의 전체 코드를 Apps Script 편집기에 붙여넣습니다
   - 프로젝트 이름: "FlowOS Contact Form Handler"
   - 💡 **담당자 이메일 확인**: 코드 상단의 `MANAGER_EMAIL` 변수를 확인하세요

### 3️⃣ Gmail 권한 승인 (최초 1회)
   - 코드를 붙여넣은 후 "실행" 버튼 클릭
   - 함수 선택: `doPost`
   - ⚠️ "권한 검토" 팝업이 표시됩니다
   - "권한 검토" → 구글 계정 선택
   - "고급" → "FlowOS Contact Form Handler(안전하지 않음)으로 이동" 클릭
   - "허용" 클릭하여 Gmail 전송 권한 승인
   - 💡 이 단계는 이메일 전송 기능을 위해 필수입니다

### 4️⃣ 배포하기
   - 우측 상단 "배포" → "새 배포"
   - 유형 선택: **"웹 앱"**
   - 설정:
     - **설명**: FlowOS Contact Form Handler with Email
     - **다음 사용자로 앱 실행**: **나**
     - **액세스 권한**: **누구나** (⚠️ 중요!)
   - "배포" 클릭

### 5️⃣ URL 복사
   - 배포 완료 후 나오는 웹 앱 URL을 복사합니다
   - 형식: `https://script.google.com/macros/s/AKfy.../exec`

### 6️⃣ 프론트엔드 코드 업데이트
   - 복사한 URL을 `/src/app/api/contact/route.ts`의 `appsScriptUrl`에 붙여넣습니다
   - 코드가 이미 업데이트되어 있다면 이 단계는 건너뛰세요

## 📊 스프레드시트 헤더 설정

첫 번째 행에 다음 헤더를 추가하세요:

| A열 | B열 | C열 | D열 | E열 | F열 | G열 | H열 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| Index | 이름 | 회사명 | 이메일 | 전화번호 | 웹사이트 | 문의내용 | 제출시간 |

## ✅ 테스트

### 기본 테스트
1. ✅ **웹사이트에서 문의 폼 제출**
2. ✅ **Google Sheets에서 데이터 확인**
   - Index가 자동으로 증가하는지 확인
   - 모든 데이터가 올바르게 입력되었는지 확인

3. ✅ **이메일 확인**
   - **담당자 이메일** (anton@flowos.work): 문의 알림 이메일 수신 확인
   - **문의자 이메일**: 감사 이메일 수신 확인

### Apps Script 로그 확인
1. Apps Script 편집기 → "실행" → "보기" → "로그"
2. 확인할 로그:
   ```
   ✅ Received data: {...}
   ✅ Data saved to spreadsheet successfully
   ✅ Manager notification email sent successfully
   ✅ Thank you email sent successfully
   ```

## 🔍 문제 해결

### 401 에러 발생 시
- ✅ Apps Script 배포 시 "액세스 권한"을 **"누구나"**로 설정했는지 확인
- ✅ 배포 후 새 URL을 코드에 업데이트했는지 확인
- ✅ URL 형식이 `/macros/s/...`인지 확인 (도메인 없음)

### 데이터가 들어가지 않을 때
- ✅ Apps Script 편집기에서 "보기" → "로그"에서 에러 확인
- ✅ JSON.parse 에러가 있다면 데이터 형식 확인
- ✅ 스프레드시트가 올바르게 연결되어 있는지 확인

### 이메일이 전송되지 않을 때
- ✅ **Gmail 권한 승인 완료 확인**
  - Apps Script 편집기 → "실행" → 함수 실행
  - 권한 요청 팝업이 다시 나타나면 승인
- ✅ **이메일 주소 확인**
  - `MANAGER_EMAIL` 변수가 올바른지 확인
  - 문의자가 입력한 이메일 주소가 유효한지 확인
- ✅ **로그에서 에러 메시지 확인**
  - "Failed to send manager notification" 또는
  - "Failed to send thank you email" 메시지 확인
- ✅ **일일 전송 제한 확인**
  - Gmail 일일 전송 한도: 일반 계정 100통/일
  - Workspace 계정: 1,500통/일

### Index가 제대로 카운팅되지 않을 때
- ✅ 첫 번째 행이 헤더인지 확인
- ✅ `lastRow` 값이 올바른지 Apps Script 로그 확인
- ✅ 여러 행이 동시에 추가되는 경우 Index 중복 가능 (정상)

### 전화번호 앞의 0이 사라질 때
**원인**: Google Sheets가 전화번호를 숫자로 자동 변환하여 앞의 0이 제거됨

**해결 방법**:
- ✅ **코드에서 이미 해결됨**: 전화번호 앞에 작은따옴표(`'`)를 추가하여 텍스트로 강제 저장
  ```javascript
  "'" + data.phone  // 예: '01012345678
  ```
- ✅ 시트에서 수동으로 수정하려면:
  1. E열(전화번호) 선택
  2. 서식 → 숫자 → 일반 텍스트
  3. 단, 이미 저장된 데이터는 수동으로 0을 다시 입력해야 함
- ✅ 새로 저장되는 데이터는 자동으로 0이 유지됨

## 📧 이메일 템플릿 커스터마이징

### 담당자 이메일 변경
코드 상단의 `MANAGER_EMAIL` 변수를 수정하세요:
```javascript
const MANAGER_EMAIL = 'your-email@example.com';
```

### 여러 담당자에게 전송
```javascript
const MANAGER_EMAILS = ['email1@example.com', 'email2@example.com'];

// sendNotificationToManager 함수에서:
MailApp.sendEmail({
  to: MANAGER_EMAILS.join(','),
  subject: subject,
  htmlBody: htmlBody
});
```

### 이메일 디자인 변경
- `sendNotificationToManager` 함수의 `htmlBody` 변수 수정
- `sendThankYouEmail` 함수의 `htmlBody` 변수 수정
- CSS 스타일과 HTML 구조를 자유롭게 변경 가능

## 🎉 완료!

이제 문의 폼이 다음 기능을 모두 지원합니다:
- ✅ Google Sheets에 자동 저장 (Index 자동 카운팅)
- ✅ 담당자에게 알림 이메일 전송
- ✅ 문의자에게 감사 이메일 자동 전송
- ✅ 전문적인 HTML 이메일 디자인
- ✅ 강력한 에러 처리 및 로깅
