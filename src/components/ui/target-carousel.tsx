'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const targetCompanies = [
  '매장 방문 고객 데이터를\n판매 성과로 연결하고 싶으신 기업.',
  '온라인 소비자 행동 데이터를\n브랜딩에 활용하고 싶으신 기업.',
  '서비스 이용 데이터를 활용한\nAI 기반 영업 자동화가 필요하신 기업.',
  '고객 응대 데이터를 기반으로\nCS 효율화를 희망하시는 기업.',
  '물류 데이터를 분석하여\n배송 운영 최적화를 목표로 하시는 기업.',
  '주문 데이터를 기반으로\n생산 라인을 최적화 하고자 하시는 기업.',
  '고객 구매 행동 데이터를 기반으로\n마케팅 성과 개선이 필요하신 기업.',
  '직원 근태 데이터를 활용하여\n인력 운용 효율을 강화하고 싶으신 기업.',
];

export function TargetCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={24}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        loopAdditionalSlides={3}
        className="target-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
            loopAdditionalSlides: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            loopAdditionalSlides: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
            loopAdditionalSlides: 3,
          },
        }}
      >
        {targetCompanies.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full rounded-2xl border-2 p-6 flex items-center justify-center transition-all duration-300 hover:shadow-2xl swiper-slide-card">
              <p className="text-base leading-relaxed font-semibold whitespace-pre-line text-center">
                {text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .target-swiper {
          width: 100%;
          padding: 20px 0 60px 0;
        }

        .target-swiper .swiper-slide {
          height: 160px;
          transition: all 0.3s ease;
        }

        /* 기본 카드 스타일 (양옆 카드) */
        .target-swiper .swiper-slide .swiper-slide-card {
          background: white;
          border-color: #e5e7eb;
          color: #1f2937;
        }

        .dark .target-swiper .swiper-slide .swiper-slide-card {
          background: #1e293b;
          border-color: #334155;
          color: white;
        }

        /* 중앙 활성 카드 - 버튼 색상으로 강조 */
        .target-swiper .swiper-slide-active .swiper-slide-card {
          background: linear-gradient(to right, #2563eb, #06b6d4);
          border-color: #06b6d4;
          color: white;
          transform: scale(1.05);
        }

        .dark .target-swiper .swiper-slide-active .swiper-slide-card {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          border-color: #06b6d4;
          color: white;
        }

        .target-swiper .swiper-pagination {
          bottom: 0;
        }

        .target-swiper .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.5;
        }

        .target-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #06b6d4;
        }

        .target-swiper .swiper-button-prev,
        .target-swiper .swiper-button-next {
          color: #3b82f6;
          width: 40px;
          height: 40px;
        }

        .target-swiper .swiper-button-prev:after,
        .target-swiper .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .target-swiper .swiper-slide {
            width: 240px;
            height: 140px;
          }

          .target-swiper .swiper-button-prev,
          .target-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
