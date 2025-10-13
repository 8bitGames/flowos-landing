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

    // Google Apps Script URL
    const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbzrJoSBTCzyKu1_5P-c0kqfcc8zzAdWe0AeW6hd0bGNHzggwNfGXGgWIO2Wor2ScFfc/exec';

    // 현재 시간 (한국 시간)
    const now = new Date();
    const koreanTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    const timestamp = koreanTime.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    // Google Apps Script로 데이터 전송
    const payload = {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      website: body.website || '',
      message: body.message,
      timestamp: timestamp
    };

    console.log('Sending to Apps Script:', payload);

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });

    console.log('Apps Script response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Apps Script error response:', errorText);
      throw new Error(`Apps Script returned status ${response.status}`);
    }

    // Apps Script 응답 파싱
    const result = await response.json();
    console.log('Apps Script result:', result);

    if (result.status === 'error') {
      throw new Error(result.message || 'Apps Script에서 에러가 발생했습니다.');
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
