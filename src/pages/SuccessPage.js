import React, { useState } from "react";
import imageSrc from '../images/icons/stack_dev_logo1.png'; 
import imageSrc1 from '../images/icons/download_icon_white.png';

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
            alt="stack_dev_logo1" 
            style={{ width: '238px', height: '60px', paddingTop: '36px', paddingLeft: '66px' }} 
          />
        </div>
        <div style={{ position: 'absolute', top: '61px', left: '720px', pointerEvents: 'auto', fontWeight: '800' }}>
          <p style={{ fontSize: '72px' }}>
            완성!
          </p>
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
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative' // 자식 요소에 절대 위치 지정 가능
      }}>
        <h2 style={{ 
          fontSize: '55px', 
          position: 'absolute', 
          top: '1px', // 원하는 상단 위치 설정
          left: '50%', 
          transform: 'translateX(-50%)' // 가운데 정렬
        }}>
          다운로드
        </h2>
        <p style={{ marginTop: '130px', marginBottom: '14px' }}>휴대폰 카메라를 열고 QR코드를 스캔하세요</p>
        <div style={{ marginTop: '19.2rem', display: 'flex', justifyContent: 'flex-end', marginRight: '1.5rem' }}>
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
        display: 'flex', // Flexbox 사용
        alignItems: 'center', // 중앙 정렬
        justifyContent: 'center', // 수평 가운데 정렬
        gap: '8px' // 아이콘과 텍스트 간격
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