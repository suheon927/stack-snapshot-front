import React, { useState } from "react";
import imageSrc from '../images/icons/stack_dev_logo2.png'; 
import imageSrc1 from '../images/icons/download_icon_white.png';
import imageSrc6 from '../images/icons/유형6.png';
import imageSrc2 from '../images/icons/chick1.png';
import imageSrc3 from '../images/icons/chick2.png';
import imageSrc4 from '../images/icons/qr_image.png';
import imageSrc5 from '../images/icons/chick3.png';

/**
 * 완료 페이지
 * @since
 * @author 김현나
 */
const SuccessPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const openModal = () => setIsModalOpen(true); // 모달 열기 함수
  const closeModal = () => setIsModalOpen(false); // 모달 닫기 함수

  return (
    <div>
      {/* 상단 로고 이미지 */}
      <div className="grid items-left justify-items-center" style={{ pointerEvents: 'auto' }}>
        <img 
          src={imageSrc} 
          alt="stack_dev_logo2" 
          style={{ width: '150px', height: '78px', paddingTop: '36px', paddingLeft: '66px' }} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-40px', pointerEvents: 'auto' }}>
<p className="weight-800" style={{ fontSize: '72px', textAlign: 'center', marginBottom: '10px' }}>
  완성!
</p>

<div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
<img src={imageSrc2} alt="유형2" style={{ position: 'relative', left: '-120px', top: '-10px' }} />
  <img src={imageSrc6} alt="유형6" style={{position: 'relative', left: '-40px' }} />
  <img src={imageSrc3} alt="유형3" style={{ position: 'relative', right: '-100px' }} />
</div>
</div>




      
      {/* 모달 열기 버튼 */}
      <button
        onClick={openModal}
        style={{
          position: 'absolute',
          top: '680px',  
          right: '60px',
          width: '75px',
          height: '75px',
          backgroundColor: '#080E1C',
          borderRadius: '12px',
          cursor: 'pointer',
          pointerEvents: 'auto'
        }}
      >
        <svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.25 21.875V27.7083C33.25 28.4819 32.9164 29.2237 32.3225 29.7707C31.7286 30.3177 30.9232 30.625 30.0833 30.625H7.91667C7.07681 30.625 6.27136 30.3177 5.6775 29.7707C5.08363 29.2237 4.75 28.4819 4.75 27.7083V21.875M11.0833 14.5833L19 21.875M19 21.875L26.9167 14.5833M19 21.875V4.375" stroke="#D2D5DC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* 모달 창 */}
      {isModalOpen && (
<div style={{
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000
}}>
  
  <div style={{
    width: '735px', // 모달 창 너비
    height: '528px', // 모달 창 높이
    backgroundColor: '#FFF',
    border: '2px solid #000', // 2px stroke
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative' // 자식 요소에 절대 위치 지정 가능
  }}>
    
    {/* 이미지 상단에 걸치도록 배치 */}
    <img src={imageSrc5} alt="chick3" style={{
      position: 'absolute',
      top: '-80px', // 모달 상단에 걸치도록 조정
      left: '80%',
      transform: 'translateX(-50%)', // 중앙 정렬
      width: '150px', // 이미지 크기 조정
      height: '150px',
      zIndex: 1 // 다른 요소 위에 표시되도록
    }} />

    <h2 style={{ 
      fontSize: '55px', 
      position: 'absolute', 
      top: '1px', // 원하는 상단 위치 설정
      left: '50%', 
      transform: 'translateX(-50%)' // 가운데 정렬
    }}>
      다운로드
    </h2>
    
    <p style={{ marginTop: '130px', marginBottom: '14px', fontSize: '24px' }}>
      휴대폰 카메라를 열고 QR코드를 스캔하세요
    </p>
    
    <img src={imageSrc4} alt="qr_image" style={{ marginTop: '20px' }} />
    
    <div style={{ marginTop: '3.7rem', display: 'flex', justifyContent: 'flex-end', marginRight: '1.5rem' }}>
      <button 
        onClick={closeModal} 
        style={{
          width: '150px',
          height: '45px',
          flexShrink: 0,
          backgroundColor: '#080E1C',
          color: '#D2D5DC',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        추첨하러 가기 

        <svg width="15" height="15" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4375 22.1875L9.90625 19.6875L16.6562 12.9375H0.78125V9.25H16.6562L9.90625 2.53125L12.4375 0.03125L23.5312 11.0938L12.4375 22.1875Z" fill="#D2D5DC"/>
        </svg>

      </button>
    </div>
    
  </div>
</div>
)}



        
    </div>
); 
};


export default SuccessPage;