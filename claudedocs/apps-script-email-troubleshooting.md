# Apps Script 이메일 전송 문제 해결

## 🚨 증상: 보낸 메일함에는 있지만 수신자에게 도착하지 않음

이 문제는 일반적으로 다음 원인들 때문에 발생합니다.

## 🔍 체크리스트

### 1️⃣ Gmail 권한 확인

Apps Script가 Gmail을 통해 이메일을 보낼 권한이 있는지 확인하세요.

**확인 방법:**
1. Apps Script 편집기 열기
2. 왼쪽 메뉴 "서비스" 또는 "Services" 클릭
3. "Gmail API" 추가 확인

**권한 재승인:**
1. Apps Script 편집기에서 함수 선택: `sendThankYouEmail` 또는 `sendNotificationToManager`
2. "실행" 버튼 클릭
3. 권한 요청 팝업이 나타나면:
   - "권한 검토" 클릭
   - 구글 계정 선택
   - "고급" → "[프로젝트 이름](안전하지 않음)으로 이동" 클릭
   - "허용" 클릭

### 2️⃣ MailApp vs GmailApp 확인

현재 코드는 `MailApp`을 사용하고 있습니다. 더 안정적인 전송을 위해 `GmailApp`으로 변경을 고려하세요.

**현재 코드 (MailApp):**
```javascript
MailApp.sendEmail({
  to: data.email,
  subject: subject,
  htmlBody: htmlBody
});
```

**개선된 코드 (GmailApp):**
```javascript
GmailApp.sendEmail(data.email, subject, '', {
  htmlBody: htmlBody,
  name: 'FlowOS'
});
```

### 3️⃣ 이메일 형식 검증

수신자 이메일 주소가 유효한지 확인하세요.

**디버깅 코드 추가:**
```javascript
function sendThankYouEmail(data) {
  var subject = '[FlowOS] 문의 접수가 완료되었습니다.';

  // 이메일 주소 검증 및 로깅
  Logger.log('Sending email to: ' + data.email);
  Logger.log('Email type: ' + typeof data.email);

  // 이메일 형식 검증
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    Logger.log('Invalid email format: ' + data.email);
    throw new Error('Invalid email format');
  }

  // 나머지 코드...
}
```

### 4️⃣ Gmail 일일 전송 한도 확인

**전송 한도:**
- 개인 Gmail 계정: 100통/일
- Google Workspace 계정: 1,500통/일

**확인 방법:**
1. Gmail 설정 → 계정 → "다음으로 메일 보내기" 확인
2. 오늘 보낸 이메일 개수 확인

### 5️⃣ 스팸 필터 및 수신 확인

**수신자 측 확인:**
- ✅ 스팸/정크 메일함 확인
- ✅ 프로모션 탭 확인 (Gmail의 경우)
- ✅ 차단된 발신자 목록 확인
- ✅ 이메일 필터 규칙 확인

**발신자 측 확인:**
- ✅ Gmail → 보낸 메일함에서 이메일 열기
- ✅ 수신자 주소가 정확한지 확인
- ✅ "반송됨" 또는 "전송 실패" 메시지 확인

### 6️⃣ Apps Script 실행 로그 확인

**로그 확인 방법:**
1. Apps Script 편집기
2. 상단 메뉴: "실행" → "실행 기록"
3. 또는 "보기" → "로그"

**예상 로그:**
```
✅ Received data: {"email":"test@example.com",...}
✅ Data saved to spreadsheet successfully
✅ Sending email to: test@example.com
✅ Thank you email sent successfully
```

**에러 로그 예시:**
```
❌ Failed to send thank you email: Exception: Invalid email...
❌ Service invoked too many times: MailApp.sendEmail
```

## 🔧 개선된 코드 (에러 처리 강화)

### 완전한 sendThankYouEmail 함수

```javascript
function sendThankYouEmail(data) {
  try {
    var subject = '[FlowOS] 문의 접수가 완료되었습니다.';

    // 이메일 주소 검증
    if (!data.email || typeof data.email !== 'string') {
      throw new Error('Email is missing or invalid');
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format: ' + data.email);
    }

    Logger.log('Preparing to send email to: ' + data.email);

    var htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.8; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .content { background: #ffffff; padding: 30px; }
          .greeting { font-size: 16px; margin-bottom: 20px; }
          .intro { margin: 20px 0; color: #555; }
          .highlight-box { background: #f8f9fa; border-left: 4px solid #0099CC; padding: 20px; margin: 20px 0; }
          .services { margin: 20px 0; }
          .services ul { line-height: 2.0; padding-left: 20px; }
          .pdf-section { border: 1px solid #e0e0e0; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .pdf-link { color: #0099CC; text-decoration: underline; font-weight: bold; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; color: #666; }
          .signature a { color: #0099CC; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <div class="greeting">
              <strong>${data.name}</strong> 님, 안녕하세요
            </div>

            <div class="intro">
              <p>기업이 보유한 데이터를 구조화 및 자산화하고,<br>
              효율적인 워크플로우를 제안하는 <strong>FlowOS</strong> 입니다.</p>
            </div>

            <div class="highlight-box">
              <p style="margin: 0;">공식 채널을 통해 남겨주신 문의가 정상적으로 접수되었으며,<br>
              담당자 검토 후 <strong>6시간 이내</strong>에 연락드리겠습니다.</p>
            </div>

            <p>문의에 진심으로 감사드리며, 정성을 다해 도움드리겠습니다.<br>
            관련 문의사항은 언제든지 추가로 남겨주세요 :)</p>

            <div class="services">
              <p><strong><u>[주요 서비스]</u></strong></p>
              <ul>
                <li>기업 데이터 구조화 및 자산화</li>
                <li>업무 프로세스 컨설팅 및 최적화</li>
                <li>AI 기반 워크플로우 설계 및 구축</li>
                <li>맞춤형 업무 시스템 개발 및 운영</li>
              </ul>
            </div>

            <div class="pdf-section">
              <p style="margin: 0 0 10px 0;">
                <a href="https://featpaper.com/l/cqcHs4v1" target="_blank" class="pdf-link">[FlowOS] 서비스 소개서_4Q.pdf</a>
              </p>
              <p style="margin: 0; font-size: 14px; color: #666;">
                📄 서비스 소개서를 확인하시려면 위 링크를 클릭해주세요.
              </p>
            </div>

            <div class="signature">
              <p style="margin: 5px 0;">--</p>
              <p style="margin: 5px 0;"><strong>E.</strong> <a href="mailto:anton@flowos.work">anton@flowos.work</a></p>
              <p style="margin: 5px 0;"><strong>W.</strong> <a href="https://www.flowos.work" target="_blank">flowos.work</a></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // GmailApp 사용 (더 안정적)
    try {
      GmailApp.sendEmail(data.email, subject, '', {
        htmlBody: htmlBody,
        name: 'FlowOS',
        noReply: false
      });
      Logger.log('Email sent successfully to: ' + data.email);
    } catch (gmailError) {
      // GmailApp 실패 시 MailApp으로 재시도
      Logger.log('GmailApp failed, trying MailApp: ' + gmailError.toString());
      MailApp.sendEmail({
        to: data.email,
        subject: subject,
        htmlBody: htmlBody,
        name: 'FlowOS'
      });
      Logger.log('Email sent via MailApp to: ' + data.email);
    }

    return true;

  } catch (error) {
    Logger.log('Failed to send thank you email: ' + error.toString());
    Logger.log('Email data: ' + JSON.stringify(data));
    throw error;
  }
}
```

## 🧪 테스트 방법

### 1. 직접 테스트 함수 생성

```javascript
function testEmailSending() {
  var testData = {
    name: '테스트 사용자',
    email: 'your-test-email@gmail.com',  // 본인 이메일로 변경
    company: '테스트 회사',
    phone: '01012345678',
    message: '테스트 메시지입니다.'
  };

  try {
    sendThankYouEmail(testData);
    Logger.log('✅ Test email sent successfully');
  } catch (error) {
    Logger.log('❌ Test email failed: ' + error.toString());
  }
}
```

**실행 방법:**
1. 위 함수를 Apps Script에 추가
2. `your-test-email@gmail.com`을 본인 이메일로 변경
3. 함수 선택: `testEmailSending`
4. "실행" 클릭
5. 로그 확인
6. 본인 이메일 수신함 확인

### 2. 받는 사람 이메일 확인

```javascript
function verifyEmailAddress() {
  var testEmail = 'test@example.com';  // 확인할 이메일

  Logger.log('Testing email: ' + testEmail);

  try {
    // 간단한 테스트 이메일 전송
    GmailApp.sendEmail(testEmail, 'Test Subject', 'Test Body');
    Logger.log('✅ Email sent successfully');
  } catch (error) {
    Logger.log('❌ Failed to send: ' + error.toString());
  }
}
```

## 📊 일반적인 문제와 해결책

| 문제 | 원인 | 해결 방법 |
|------|------|----------|
| 스팸함으로 이동 | 발신자 인증 부족 | Gmail에서 발신자를 연락처에 추가 |
| 전송 한도 초과 | 일일 100통 초과 | Google Workspace 계정 사용 |
| 권한 부족 | Gmail API 권한 미승인 | 권한 재승인 (위 1번 참고) |
| 잘못된 이메일 형식 | 공백, 특수문자 등 | 이메일 검증 코드 추가 |
| HTML 렌더링 실패 | 잘못된 HTML | HTML 검증 도구 사용 |

## 🔐 보안 및 신뢰성 강화

### SPF/DKIM 설정 (Google Workspace만 해당)

Google Workspace를 사용하는 경우, 도메인 인증을 설정하여 이메일 신뢰도를 높이세요:

1. Google Admin 콘솔 → Apps → Google Workspace → Gmail
2. Authenticate email → Configure
3. SPF, DKIM 레코드를 도메인 DNS에 추가

### 발신자 이름 설정

```javascript
GmailApp.sendEmail(data.email, subject, '', {
  htmlBody: htmlBody,
  name: 'FlowOS',  // 발신자 이름
  from: 'anton@flowos.work'  // 발신 이메일 (Workspace 계정만)
});
```

## ✅ 최종 체크리스트

- [ ] Apps Script에서 Gmail 권한 승인 완료
- [ ] 테스트 함수로 이메일 전송 테스트 완료
- [ ] 로그에서 성공 메시지 확인
- [ ] 본인 이메일로 테스트 수신 확인
- [ ] 스팸함 확인
- [ ] 수신자 이메일 주소 형식 확인
- [ ] 일일 전송 한도 확인
- [ ] 에러 처리 코드 추가
- [ ] GmailApp으로 변경 (선택)

## 🆘 여전히 문제가 있다면

1. **Apps Script 실행 기록 확인**
   - "실행" → "실행 기록"에서 상세 에러 로그 확인

2. **Gmail 활동 로그 확인**
   - Gmail → 설정 → "필터 및 차단된 주소"
   - 전달 설정 확인

3. **Google 계정 보안 설정**
   - "보안 수준이 낮은 앱의 액세스" 확인 (레거시)
   - 2단계 인증 상태 확인

4. **직접 테스트**
   - 본인 이메일로 테스트 전송
   - 다른 이메일 주소로도 테스트
   - 여러 이메일 서비스 (Gmail, Naver, Daum 등) 테스트
