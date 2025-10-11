import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 필수 필드 검증
    if (!body.name || !body.company || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { status: 'error', message: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!apiKey || !sheetId) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { status: 'error', message: '서버 설정 오류입니다.' },
        { status: 500 }
      );
    }

    // 현재 시간 (한국 시간)
    const now = new Date();
    const koreanTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    const timestamp = koreanTime.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    // Google Sheets에 데이터 추가
    const values = [[
      body.name,
      body.company,
      body.email,
      body.phone,
      body.website || '',
      body.message,
      timestamp
    ]];

    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:G:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

    const response = await fetch(appendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: values
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google Sheets API error:', errorData);
      throw new Error(`Google Sheets API 오류: ${response.status}`);
    }

    return NextResponse.json({
      status: 'success',
      message: '문의가 성공적으로 접수되었습니다.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: '문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      },
      { status: 500 }
    );
  }
}
