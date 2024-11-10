import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from '../images/icons/stack_dev_logo2.png';
import logo2 from '../images/icons/arrow_right_black.png';
import logo3 from '../images/icons/PictureCompletedPage_imoticon.png';



/**
 * 사진 촬영 페이지
 * @since 2024.10.17
 * author 임석진
 */

const PictureCompletedPage = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { photoUrls = [] } = location.state || {};


    const handleNextClick = () => {
        navigate('/picture/select-photo', { state: { photoUrls } }); // photoUrls 데이터를 함께 전달
    };

    return (
        <div className="camera-container background-yellow">
            <div className="header">
                <img src={logo1} alt="Stack Logo" className="stack_logo" />
            </div>
            <img src={logo3} alt="imoticon" className="PictureCompletedPage_imoticon" />

            <div className="camera-button-container">
                <button className="next-button weight-500" onClick={handleNextClick}>
                    <span className="weight-700">다음</span>
                    <img src={logo2} alt="Arrow-right" className="arrow-right" />
                </button>
            </div>

            <div className="photo-container">
                {photoUrls.length === 0 ? (
                    <p>사진이 없습니다.</p>
                ) : (
                    <div
                        className="photos-grid"
                        style={{
                            display: 'flex',
                            gap: '55px',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            marginTop: '100px' // 추가: 사진들을 밑으로 내리기 위해 marginTop 설정
                        }}
                    >
                        {photoUrls.map((photoUrl, index) => (
                            <div key={index}>
                                <img
                                    src={`http://localhost:8080${photoUrl}`}
                                    alt={`사진 ${index + 1}`}
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        marginBottom: '10px', // 사진과 사진 사이의 간격 조정
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PictureCompletedPage;
