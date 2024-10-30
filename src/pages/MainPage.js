import React from "react";
import imageSrc from '../images/icons/stack_dev_logo1.png'; 
import imageSrc2 from '../images/icons/유형2.png'; 
import imageSrc3 from '../images/icons/유형3.png'; 
import imageSrc1 from '../images/icons/유형1.png'; 
import imageSrc4 from '../images/icons/유형4.png'; 
import imageSrc5 from '../images/icons/유형5.png';

/**
 * 메인 페이지
 * @since
 * author 김현나
 */
const MainPage = () => {
  return (
    <div className="min-h-screen relative" style={{ overflow: 'hidden' }}>
      
      {/* 애니메이션 이미지 전체 화면 배경 섹션 */}
      <div className="image-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        {/* 그룹 1: 유형2와 유형3 */}
        <div style={{ position: 'absolute', right: '20%', animation: 'slideUp 10s linear infinite' }}>
          <img src={imageSrc2} alt="유형2" style={{ width: '450px', height: '600px' }} />
        </div>
        <div style={{ position: 'absolute', right: '20%', animation: 'slideUp 10s linear infinite 4s' }}>
          <img src={imageSrc3} alt="유형3" style={{ width: '450px', height: '600px' }} />
        </div>

        {/* 그룹 2: 유형1 */}
        <div style={{ position: 'absolute', right: '0%', animation: 'slideUp 10s linear infinite' }}>
          <img src={imageSrc1} alt="유형1" style={{ width: '327px', height: '476px' }} />
        </div>

        {/* 그룹 3: 유형4 */}
        <div style={{ position: 'absolute', right: '0%', animation: 'slideUp 10s linear infinite 3s' }}>
          <img src={imageSrc4} alt="유형4" style={{ width: '327px', height: '476px' }} />
        </div>

        {/* 그룹 4: 유형5 */}
        <div style={{ position: 'absolute', right: '0%', animation: 'slideUp 10s linear infinite 6s' }}>
          <img src={imageSrc5} alt="유형5" style={{ width: '327px', height: '650px' }} />
        </div>
      </div>

      {/* 상단 컨텐츠 섹션 */}
      <div className="content-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        {/* 상단 로고 이미지 */}
        <div className="grid items-left justify-items-center" style={{ pointerEvents: 'auto' }}>
          <img 
            src={imageSrc} 
            alt="stack_dev_logo1" 
            style={{ width: '238px', height: '60px', paddingTop: '36px', paddingLeft: '66px' }} 
          />
        </div>

        {/* 첫 번째 텍스트 섹션 */}
        <div style={{ position: 'absolute', top: '400px', left: '76px', pointerEvents: 'auto' }}>
          <p style={{ fontSize: '24px' }}>
            다시는 돌아오지 않을 지금을 사진으로
          </p>
        </div>

        {/* 두 번째 텍스트 섹션 */}
        <div style={{ position: 'absolute', top: '450px', left: '76px', pointerEvents: 'auto' }}>
          <p
            style={{
              fontFamily: 'Pretendard',        
              fontSize: '110px',              
              fontWeight: '800',               
              color: '#FFF',                    
              WebkitTextStrokeWidth: '3px',     
              WebkitTextStrokeColor: '#4E4E4E', 
              lineHeight: 'normal',             
              letterSpacing: '4.4px',           
            }}
          >
            스택네컷
          </p>
        </div>

        {/* 버튼 섹션 */}
        <button
          style={{
            position: 'absolute',
            top: '600px',  
            left: '76px',
            width: '338px',
            height: '78px',
            backgroundColor: '#FFF',
            color: '#020E2E',
            fontSize: '32px',
            borderRadius: '12px',
            cursor: 'pointer',
            border: '3px solid #020E2E',
            pointerEvents: 'auto'
          }}
        >
          추억 만들러가기

          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4375 22.1875L9.90625 19.6875L16.6562 12.9375H0.78125V9.25H16.6562L9.90625 2.53125L12.4375 0.03125L23.5312 11.0938L12.4375 22.1875Z" fill="#020E2E"/>
          </svg>
        </button>
      </div>

      {/* 애니메이션 효과 추가 */}
      <style>
        {`
          @keyframes slideUp {
            0% {
              transform: translateY(100vh); /* 화면 맨 아래에서 시작 */
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh); /* 화면 위로 나가서 사라짐 */
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MainPage;
