import React from "react";
import logo1 from '../images/icons/stack_dev_logo1.png';
import logo2 from '../images/icons/arrow-right-black.png';
import logo3 from '../images/icons/PictureCompletedPage_imoticon.png';

/**
 * 사진 촬영 페이지
 * @since 2024.10.17
 * author 임석진
 */
const NextPage = () => {
    return (
        <div className="camera-container background-yellow">
            <div className="header">
                <img src={logo1} alt="Stack Logo" className="stack_logo" />
                <h1 className="stack_letter">스택네컷</h1>
            </div>
            <img src={logo3} alt="imoticon" className="Next_imoticon" />
            <div className="camera-button-container">
                <button className="next-button weight-500">
                    <span className="weight-700">다음</span>
                    <img src={logo2} alt="Arrow-right" className="arrow-right" />
                </button>
            </div>


            <div className="photo-container">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="photo"></div>
                ))}
            </div>
        </div>
    );
};

export default NextPage;
