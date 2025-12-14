// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { writeFile } from 'node:fs';
import { GoogleGenAI } from '@google/genai';
import mime from 'mime';

function saveBinaryFile(fileName: string, content: Buffer) {
  writeFile(fileName, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file ${fileName}:`, err);
      return;
    }
    console.log(`File ${fileName} saved to file system.`);
  });
}

const koreanCopyToImprove = `
다음은 FlowOS라는 AI 기반 업무 자동화 솔루션의 랜딩 페이지 한국어 카피입니다.
이 카피들을 더 자연스럽고 세련된 한국어로 개선해주세요.
- B2B SaaS 기업의 톤앤매너를 유지하세요
- 전문적이면서도 따뜻한 느낌을 주세요
- 어색한 표현이나 번역투를 자연스러운 한국어로 바꿔주세요
- 핵심 메시지는 유지하되 더 임팩트 있게 표현하세요
- 불필요하게 긴 문장은 간결하게 다듬어주세요

JSON 형식으로 응답해주세요. 각 키는 원본과 동일하게 유지하고, 값만 개선된 한국어로 바꿔주세요.

원본 카피:

{
  "nav": {
    "feature": "기능",
    "services": "서비스",
    "usecase": "활용사례",
    "blog": "블로그",
    "contact": "문의하기"
  },
  "hero": {
    "subtitle": "기업 데이터를 {words}하여 생산성을 높이는 AI 솔루션",
    "description": "생산성 30% 향상, 비용 30% 절감을 실현합니다.",
    "rollingWords": ["발견", "분석", "연결"],
    "cta": "지금 시작하기"
  },
  "previewCards": {
    "aiPowered": {
      "title": "AI 기반 워크플로우",
      "description": "손 쉽게 업무 효율을 높이고 성과를 극대화 하세요",
      "features": [
        "데이터 접근성-활용성 확대",
        "AI 기반 주요 업무 자동화",
        "업무 간 상호 연결-연속성 강화",
        "조직 데이터 안정성 확보"
      ]
    },
    "productivity": {
      "title": "생산성 / 효율성",
      "description": "조직 생산성과 업무 효율을 높일 수 있습니다."
    },
    "cost": {
      "title": "비용 / 리소스",
      "description": "조직 운영 비용과 투입 리소스를 절감해보세요."
    },
    "system": {
      "title": "데이터 & AI 기반 시스템",
      "description": "FlowOS와 더 빠르고, 효율적이고, 유연하게 일하세요. AI가 데이터를 효율로, 효율을 성과로 바꿉니다.",
      "benefits": [
        "의사결정 타당성 강화",
        "프로젝트 리소스 절감",
        "개인 업무 처리량 증가",
        "제품-서비스 품질 향상"
      ]
    }
  },
  "valueProposition": {
    "quote": "더 많은 기업들이 {highlight}에만 집중하기를 바랍니다.",
    "quoteHighlight": "가치",
    "description": "FlowOS가 전략 컨설팅과 분석에서 끝나지 않는 시스템 운영 파트너로서, AI와 사람이 함께 하는 새로운 업무의 흐름을 만들어 드리겠습니다."
  },
  "features": {
    "title": "FlowOS 는 어떤 서비스를 제공하나요?",
    "subtitle": "FlowOS가 제공하는 서비스",
    "items": [
      {
        "title": "업무 프로세스 컨설팅",
        "subtitle": "운영 프로세스 컨설팅",
        "description": "업무상의 문제를 정의하고 개선 포인트를 제안합니다. 기획, 디자인, 운영에 따른 로드맵을 구성합니다."
      },
      {
        "title": "데이터 수집 및 구조화",
        "subtitle": "데이터 수집 및 체계화",
        "description": "분석의 기반이 되는 업무 데이터를 내부 자산화하고, 체계적인 관리 및 업데이트를 위한 CONTEXT HUB를 구축합니다."
      },
      {
        "title": "워크플로우 디자인 설계",
        "subtitle": "워크플로우 설계 및 아키텍처",
        "description": "반복 업무 자동화부터 전반의 프로세스를 최적화합니다. 부분적으로 AI 어시스턴트를 도입하여 효율화합니다."
      },
      {
        "title": "업무 시스템 개발 운영",
        "subtitle": "시스템 개발 및 관리",
        "description": "기능별 데모 제공 및 주기적으로 피드백을 반영합니다. 기업 맞춤형 솔루션을 구축하고 관리합니다."
      }
    ],
    "footer": "FlowOS는 국내에서 AI 기반의 데이터 운영 체제 구축을 제공하는 대표 기업입니다."
  },
  "process": {
    "title": "FlowOS 서비스는 어떤 과정과 절차로 제공되나요?",
    "subtitle": "FlowOS는 조직이 데이터 기반으로 일할 수 있는 구조를 구축하며, 성과 및 효율 개선을 위한 End-To-End 를 함께합니다.",
    "steps": [
      { "number": "01", "title": "기업 현황 진단 및\\n개선 목표 정의" },
      { "number": "02", "title": "데이터 수집 및\\n활용 구조 설계" },
      { "number": "03", "title": "개선 방안 수립 및\\n제안" },
      { "number": "04", "title": "자동화-AI 도구 개발 및\\n데모 제공" },
      { "number": "05", "title": "기업용 통합 시스템\\n개발 및 운영" },
      { "number": "06", "title": "이용 피드백 반영 및\\n기능 업데이트" }
    ]
  },
  "cta": {
    "title": "아직도 너무 어려워보이시나요?",
    "subtitle": "망설임은 성장만 늦출 뿐입니다.",
    "description": "데이터 기반의 의사결정, 협력 그리고 자동화까지, 기업이 AI와 함께 일하는 방식을 혁신할 시간입니다.",
    "button": "지금 바로 당신의 비즈니스 고민을 공유해주세요."
  },
  "targetCompanies": {
    "title": "이런 고민을 가진 기업들에게 제안드립니다.",
    "subtitle1": "어떤 산업, 어떤 기업이든 데이터는 쌓이고 있습니다.",
    "subtitle2": "데이터를 어떤 방식으로 활용하는지가 관건입니다.",
    "cards": [
      "**매장 방문 고객 데이터**를\\n판매 성과로 연결하려면 어떻게 해야할까요?",
      "**온라인 소비자 행동 데이터**를\\n브랜딩에 활용하려면 어떻게 해야할까요?",
      "**서비스 이용 데이터**를 활용해서\\nAI 기반 영업 자동화가 가능할까요?",
      "**고객 응대 데이터**를 기반으로\\nCS 효율화를 하려면 어떤 방법이 있을까요?",
      "**물류 데이터**를 수집하고 분석해서,\\n배송 운영 최적화를 목표로 하고 싶어요.",
      "**공장 주문 데이터**를 기반으로\\n생산 라인을 최적화 할 수 있을까요?",
      "**고객 구매 행동 데이터**를 기반으로\\n어떻게 마케팅 성과를 개선할 수 있을까요?",
      "**직원 근태 데이터**를 활용하여\\n인력 운용 효율을 강화하고 싶어요."
    ]
  },
  "faq": {
    "title": "자주 묻는 질문",
    "subtitle": "FlowOS에 대해 궁금한 점을 확인해보세요.",
    "items": [
      {
        "question": "FlowOS는 어떤 서비스인가요?",
        "answer": "FlowOS는 AI와 데이터 기반의 업무 자동화 및 운영 체제 구축 서비스입니다. 기업의 데이터를 발견·분석·연결하여 생산성을 높이고 비용을 절감하는 End-to-End 솔루션을 제공합니다."
      },
      {
        "question": "FlowOS를 도입하면 어떤 효과를 기대할 수 있나요?",
        "answer": "조직 생산성 30% 향상, 운영 비용 30% 절감, 데이터 기반 의사결정 강화, 반복 업무 자동화, AI 기반 프로세스 최적화 등의 효과를 기대할 수 있습니다."
      },
      {
        "question": "FlowOS는 기존 시스템과 어떻게 다른가요?",
        "answer": "FlowOS는 단순한 컨설팅이나 도구 제공에서 끝나지 않고, 데이터 구조화부터 워크플로우 설계, 시스템 개발, 운영까지 전 과정을 End-to-End로 지원하는 통합 솔루션입니다."
      },
      {
        "question": "FlowOS 도입에는 어느 정도의 시간이 소요되나요?",
        "answer": "프로젝트 규모와 범위에 따라 다르지만, 일반적으로 기업 현황 진단부터 시스템 운영까지 6단계의 프로세스를 거치며, 단계별 데모와 피드백을 통해 점진적으로 구축됩니다."
      },
      {
        "question": "FlowOS는 어떤 산업군에 적합한가요?",
        "answer": "어떤 산업, 어떤 기업이든 데이터가 쌓이는 곳이라면 FlowOS를 활용할 수 있습니다. 특히 데이터 기반 의사결정, 반복 업무 자동화, 프로세스 최적화가 필요한 모든 기업에 적합합니다."
      },
      {
        "question": "FlowOS 도입 후 운영은 어떻게 이루어지나요?",
        "answer": "시스템 구축 후에도 지속적으로 이용 피드백을 반영하고 기능을 업데이트합니다. FlowOS가 전략 컨설팅에서 끝나지 않는 시스템 운영 파트너로서 함께합니다."
      },
      {
        "question": "저희 회사에 맞는 맞춤형 솔루션이 가능한가요?",
        "answer": "네, FlowOS는 기업별 특성과 요구사항을 분석하여 맞춤형 솔루션을 설계하고 구축합니다. 기업 현황 진단부터 시작하여 귀사에 최적화된 시스템을 제공합니다."
      },
      {
        "question": "보안과 데이터 관리는 어떻게 되나요?",
        "answer": "조직 데이터 안정성 확보를 최우선으로 하며, 내부 자산화된 데이터의 체계적인 관리 및 업데이트를 위한 CONTEXT HUB를 구축합니다. 데이터 보안과 무결성을 보장합니다."
      }
    ]
  },
  "contact": {
    "title": "당신의 비즈니스 목표를\\n알려주세요.",
    "description1": "성과 개선도 좋고, 비용 감축도 좋습니다. FlowOS 가 당신의 파트너가 되어드리겠습니다.",
    "description2": "솔루션을 함께 고민할 담당자가 6시간 안에 연락드리겠습니다.",
    "formLabels": {
      "name": "이름",
      "email": "이메일",
      "company": "회사명",
      "phone": "전화번호",
      "message": "문의 내용",
      "submit": "문의하기",
      "submitting": "전송 중..."
    },
    "formPlaceholders": {
      "name": "홍길동",
      "email": "email@example.com",
      "company": "회사명을 입력해주세요",
      "phone": "010-0000-0000",
      "message": "문의하실 내용을 자유롭게 작성해주세요"
    },
    "messages": {
      "success": "문의가 성공적으로 접수되었습니다! 6시간 안에 연락드리겠습니다.",
      "error": "문의 전송에 실패했습니다. 다시 시도해주세요."
    },
    "introDownload": "서비스 소개서 받기"
  },
  "footer": {
    "copyright": "© FlowOS. Work in Flow. | anton@flowos.work",
    "tagline": "저희는 기업이 스스로 데이터로 일할 수 있는 운영 체계를 구축합니다."
  },
  "floatingButton": {
    "text": "FlowOS 문의"
  },
  "teamSection": {
    "title": "팀 소개",
    "subtitle": "AI와 비즈니스의 교차점에서 혁신을 만들어가는 전문가들",
    "ceoBadge": "대표",
    "members": [
      {
        "name": "안희창",
        "role": "대표이사 (CEO)",
        "bio": "문제의 본질을 정의하는 것에서 시작해, 가설을 검증하고 타협 없는 업무 최적화를 이뤄냅니다. 데이터와 AI 기반의 워크플로우 설계를 통해 기업이 30% 더 스마트하게 일할 수 있는 환경을 만듭니다."
      },
      {
        "name": "서재필",
        "role": "최고기술책임자 (CTO)",
        "bio": "다양한 산업을 거치며 쌓은 기술 리더십을 바탕으로 FlowOS의 핵심 아키텍처를 총괄합니다. 안정적이면서도 확장이 유연한 AI 워크플로우 시스템을 구축하여 기술적 완성도를 높입니다."
      },
      {
        "name": "유경진",
        "role": "AI 솔루션 총괄 (Head of AI)",
        "bio": "글로벌 수준의 엔지니어링 정밀도를 바탕으로 AI 솔루션을 현실화합니다. 검증된 최신 AI 기술을 적재적소에 활용하여, 고객의 운영 효율을 극대화하고 즉각적인 ROI를 창출합니다."
      },
      {
        "name": "크리스 필러",
        "role": "최고전략책임자 (CSO)",
        "bio": "복잡한 운영상의 난제를 분석하여 최적의 솔루션 로드맵을 설계합니다. 이론적 전략에 머물지 않고 현장의 실용성까지 아우르는 접근으로 실질적인 비즈니스 성과를 견인합니다."
      },
      {
        "name": "폴 메웨스",
        "role": "최고제품책임자 (CPO)",
        "bio": "사용자가 진정으로 원하고 필요로 하는 기술을 제품화합니다. 고도화된 AI 기술을 누구나 쉽게 사용할 수 있는 직관적인 도구로 재해석하여, 사용 즉시 가치를 느낄 수 있는 경험을 제공합니다."
      }
    ]
  },
  "companyInfo": {
    "name": "(주)플로우오에스",
    "ceo": "대표 안희창",
    "address": "주소: 서울시 서초구 강남대로 53길8 6-162호"
  }
}
`;

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const tools = [
    {
      googleSearch: {},
    },
  ];
  const config = {
    responseModalities: ['TEXT'],
    tools,
  };
  const model = 'gemini-3-pro-image-preview';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: koreanCopyToImprove,
        },
      ],
    },
  ];

  console.log('Calling Gemini API to improve Korean copy...\n');

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullResponse = '';
  let fileIndex = 0;

  for await (const chunk of response) {
    if (
      !chunk.candidates ||
      !chunk.candidates[0].content ||
      !chunk.candidates[0].content.parts
    ) {
      continue;
    }
    if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
      const fileName = `ENTER_FILE_NAME_${fileIndex++}`;
      const inlineData = chunk.candidates[0].content.parts[0].inlineData;
      const fileExtension = mime.getExtension(inlineData.mimeType || '');
      const buffer = Buffer.from(inlineData.data || '', 'base64');
      saveBinaryFile(`${fileName}.${fileExtension}`, buffer);
    } else {
      const text = chunk.text;
      if (text) {
        process.stdout.write(text);
        fullResponse += text;
      }
    }
  }

  // Save the full response to a file
  writeFile('scripts/improved-korean-copy.json', fullResponse, 'utf8', (err) => {
    if (err) {
      console.error('Error saving response:', err);
    } else {
      console.log('\n\nImproved copy saved to scripts/improved-korean-copy.json');
    }
  });
}

main();
