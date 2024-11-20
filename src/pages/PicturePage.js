import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../css/picture.css";
import logo1 from "../images/icons/stack_dev_logo2.png";
import logo2 from "../images/icons/camera_icon.png";
import logo3 from "../images/icons/picturepage_imoticon.png";
import chickpeasImage from "../images/icons/chickpeas_7.png";
import { useRef, useState } from "react";

/**
 * 사진 촬영 페이지
 * @since 2024.10.17
 * author 임석진
 */

const PicturePage = ({ setTeamId }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedFrameID } = location.state || { selectedFrameID: 1 }; // 기본값 설정

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [isCameraStarted, setIsCameraStarted] = useState(false);
    const [countdown, setCountdown] = useState(null);

    // 프레임 크기 설정
    const frameSizes = {
        1: { width: 273, height: 373 },
        2: { width: 272, height: 205 },
        3: { width: 272, height: 328 },
        4: { width: 340, height: 273 },
    };

    const { width, height } = frameSizes[selectedFrameID] || frameSizes[1];

    // 카메라 시작 핸들러
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width, height, facingMode: "user" },
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCameraStarted(true);
        } catch (err) {
            console.error("카메라 접근에 실패했습니다:", err);
        }
    };

    // 사진 촬영 및 업로드 핸들러
    const captureAndUploadPhotos = async () => {
        setIsCapturing(true);
        const photoCount = 6;
        const formData = new FormData();

        for (let i = 0; i < photoCount; i++) {
            for (let j = 5; j > 0; j--) {
                setCountdown(j);
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
            setCountdown(null);

            if (videoRef.current && canvasRef.current) {
                const context = canvasRef.current.getContext("2d");
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

                const blob = await new Promise((resolve) => {
                    canvasRef.current.toBlob(resolve, "image/png");
                });

                if (blob) {
                    formData.append("images", blob, `photo_${i + 1}.png`);
                } else {
                    console.error("Blob creation failed");
                    setIsCapturing(false);
                    return;
                }
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        try {
            const response = await axios.post("http://localhost:8080/api/origin-upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Upload response:", response.data);

            const photoUrlsResponse = await axios.get("http://localhost:8080/api/photos");
            if (photoUrlsResponse.data && Array.isArray(photoUrlsResponse.data)) {
                console.log("Fetched photo URLs:", photoUrlsResponse.data);

                navigate("/picture/completed", { state: { photoUrls: photoUrlsResponse.data } });
            } else {
                console.error("사진 URL을 가져오는 데 문제가 있습니다.");
                alert("사진 URL을 가져오는 데 문제가 있습니다. 다시 시도해 주세요.");
            }
        } catch (error) {
            console.error("사진 업로드 실패:", error);
            alert("사진 업로드에 실패했습니다.");
        }
        setIsCapturing(false);
    };

    return (
        <div className="camera-container background-yellow">
            <div className="header">
                <img src={logo1} alt="Stack Logo" className="stack_logo" />
            </div>
            {!isCameraStarted && <img src={logo3} alt="imoticon" className="imoticon" />}

            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: `${width}px`, height: `${height}px`, marginBottom: "20px" }}
            ></video>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

            {countdown && (
                <div className="countdown">
                    <h1>{countdown}</h1>
                </div>
            )}

            <div className="camera-button-container">
                {!isCameraStarted && (
                    <button className="camera-start-button weight-500" onClick={startCamera}>
                        사진 촬영
                    </button>
                )}
                {isCameraStarted && (
                    <button
                        className="camera-button weight-500"
                        onClick={captureAndUploadPhotos}
                        disabled={isCapturing}
                    >
                        <img src={chickpeasImage} alt="Chickpeas Icon" className="chickpeas-icon" />
                        {isCapturing ? "촬영 중..." : "사진 촬영"}{" "}
                        <img src={logo2} alt="Camera icon" className="camera-icon" />
                    </button>
                )}
            </div>

            <Outlet />
        </div>
    );
};

export default PicturePage;
