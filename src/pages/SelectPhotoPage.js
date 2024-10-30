
import "../css/SelectPhoto.css"
import logo from "../images/icons/stack_dev_logo2.png"
import { Outlet,Link,useSearchParams, useNavigate } from "react-router-dom";
import React,{useEffect,useState} from "react";
import frame1 from "../images/frames/1.png"
import frame2 from "../images/frames/2.png"
import frame3 from "../images/frames/3.png"
import frame4 from "../images/frames/4.png"
import blank from "../images/blank.png"
/**
 * 사진 선택 페이지
 * @since 2024.10.29
 * @author 김이현
 */
const SelectPhotoPage = () => {
    const FRAMES = {
        "frame1":{"shape_small":[125,192],"shape_big":[330,506],"realsize":[600,920],"frame":frame1,"selected":false,"frameID":1,"maxCount":4},
        "frame2":{"shape_small":[125,192],"shape_big":[330,506],"realsize":[600,920],"frame":frame2,"selected":false,"frameID":2,"maxCount":6},
        "frame3":{"shape_small":[125,192],"shape_big":[330,506],"realsize":[600,920],"frame":frame3,"selected":false,"frameID":3,"maxCount":4},
        "frame4":{"shape_small":[188,125],"shape_big":[495,330],"realsize":[900,600],"frame":frame4,"selected":false,"frameID":4,"maxCount":4}
    };
    let images = ["https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg",
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png",
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
    "https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg",
    "https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg",
  "https://images.unsplash.com/photo-1529927066849-79b791a69825?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"]
    //초기에 불러오는 사진들
    const [photos, setPhotos] = useState(images);

    //선택한 사진들, 순서대로
    const [SelectedPhotos, setSelectedPhotos] = useState([blank,blank,blank,blank,blank,blank]);
    const [currnetFrame, setCurrnetFrame] = useState(FRAMES["frame1"]);
    const [searchParams, setSearchParams]=useSearchParams();
    const [index, setIndex]=useState(0);
    const navigate = useNavigate();
    const frameid = searchParams.get('frameid');
    const groupid = searchParams.get("GroupID");

    useEffect(() => {
      setCurrnetFrame(FRAMES[`frame${frameid}`])
    }, [frameid,groupid]);//frameid,groupid에 종속적인
    const checkFrames = ()=>{
      for(let i=0;i<currnetFrame["maxCount"];i++){
        if(SelectedPhotos[i]==blank){
          return false;
        }
      }
      return true;
    }
    const getFirstIndex = ()=>{
      for(let i=0;i<SelectedPhotos.length;i++){
        if(SelectedPhotos[i]==blank){
          return i;
        }
      }
      return -1;
    }
    const getSelectedPhoto = ()=>{
      let res = [];
      for(let i=0;i<SelectedPhotos.length;i++){
        if(SelectedPhotos[i]!==blank&&SelectedPhotos[i]!==null){
          res.push(SelectedPhotos[i])
        }
      }
      return res
    }
    const setPhoto = (index,photo)=>{
        if(SelectedPhotos.includes(photo)){return;}
        setSelectedPhotos(prevPhotos => {
          const newPhotos = [...prevPhotos];
          newPhotos[index] = photo;
          return newPhotos;
      });
    }
    const addPhoto = (ind) => {
      let box_index = getFirstIndex()
      if(box_index!=-1&&currnetFrame["maxCount"]>box_index){
        setPhoto(box_index,photos[ind]);
        setIndex(index+1);
      }
    }
    const removePhoto = (ind) => {
      setSelectedPhotos(prevPhotos => {
        const newPhotos = [...prevPhotos];
        newPhotos[ind] = blank;
        return newPhotos;
    });
      setIndex(index-1);
      getFirstIndex();
    }
    const sendFiles = async () => {
      try {
        const formData = new FormData();

        const images = getSelectedPhoto();
    
        // Blob 형태로 변환후 FormData에 추가
        const files = await Promise.all(
          images.map(async (image, index) => {
            const response = await fetch(image);
            const blob = await response.blob();
            return new File([blob], `image${index + 1}.jpg`, { type: blob.type });
          })
        );


        //DTO에 맞춰서 데이터 추가
        files.forEach(file => {
          formData.append("file", file);
        });
        
        formData.append("GroupID", groupid);
        formData.append("SelectedFrameID", frameid);
        formData.append("SelectedImages", "");

    
        // 주소에 api 주소 적기
        const response = await fetch("http://localhost:8080/api/upload", {
          method: "POST",
          body: formData,
        });
    
        if (response.ok) {
          console.log(await response.json());
        } else {
          console.error("Failed to send files");
        }
      } catch (error) {
        console.error("Error sending files:", error);
      }
    };
  return (
    <div className="big-grid">
        <div><img className="logo" src={logo} alt="logo image"></img></div>
        <div className="grid-title">
          <svg width="323" height="115" viewBox="0 0 323 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_13_1716)">
              <path d="M51.822 34.9248C51.822 39.0029 52.3259 42.8818 53.3338 46.5615C54.3416 50.2412 55.947 53.5576 58.1502 56.5107C60.3533 59.4404 63.1658 61.7373 66.5877 63.4014L60.5408 71.417C57.283 69.8232 54.5056 67.6201 52.2088 64.8076C49.9353 61.9951 48.1306 58.7021 46.7947 54.9287C45.365 59.0068 43.4197 62.5576 40.9588 65.5811C38.5213 68.6045 35.5564 70.9717 32.0642 72.6826L25.8767 64.4561C29.5095 62.8154 32.5095 60.4717 34.8767 57.4248C37.2439 54.3545 38.9666 50.8975 40.0447 47.0537C41.1463 43.21 41.697 39.167 41.697 34.9248V25.9951H51.822V34.9248ZM78.6111 45.6826H87.7517V54.1904H78.6111V85.7607H68.4861V21.2139H78.6111V45.6826ZM118.265 33.6592C118.265 36.2607 118.78 38.7686 119.811 41.1826C120.843 43.5967 122.483 45.7764 124.733 47.7217C126.983 49.6436 129.843 51.1201 133.311 52.1514L128.108 60.0264C124.686 58.9717 121.733 57.4131 119.249 55.3506C116.788 53.2646 114.808 50.792 113.308 47.9326C111.784 51.0732 109.722 53.7803 107.12 56.0537C104.542 58.3271 101.436 60.0498 97.8036 61.2217L92.6005 53.2764C96.1161 52.1982 99.0223 50.6396 101.319 48.6006C103.64 46.5381 105.327 44.2295 106.382 41.6748C107.46 39.0967 107.999 36.4248 107.999 33.6592H95.2723V25.5732H130.64V33.6592H118.265ZM146.741 67.6904H136.616V21.2842H146.741V67.6904ZM148.358 84.7061H103.007V63.542H113.272V76.6201H148.358V84.7061ZM201.439 31.9717C201.439 36.4014 202.587 40.4092 204.884 43.9951C207.204 47.5576 210.837 50.1592 215.782 51.7998L210.298 59.6045C207.064 58.4326 204.298 56.792 202.001 54.6826C199.704 52.5732 197.864 50.0654 196.482 47.1592C195.052 50.4639 193.095 53.3115 190.61 55.7021C188.126 58.0693 185.103 59.8857 181.54 61.1514L176.056 53.2061C181.282 51.542 185.103 48.8115 187.517 45.0146C189.954 41.2178 191.173 36.8467 191.173 31.9014V25.2217H201.439V31.9717ZM231.251 68.7451H221.196V42.6592H209.806V34.5732H221.196V21.2842H231.251V68.7451ZM232.587 84.7061H187.939V63.8936H198.204V76.6201H232.587V84.7061ZM269.428 33.4482H253.467V37.9482H268.795V45.542H253.467V50.2529C256.889 50.2061 259.936 50.0889 262.608 49.9014C265.28 49.6904 267.975 49.3623 270.694 48.917L271.678 57.0029C268.139 57.5889 264.647 57.9873 261.201 58.1982C257.78 58.3857 253.467 58.4795 248.264 58.4795H243.764V25.4326H269.428V33.4482ZM297.342 60.6592H287.709V44.7686H283.28V60.2373H273.858V22.4092H283.28V36.6826H287.709V21.2842H297.342V60.6592ZM297.342 85.7607H287.217V71.2061H252.412V63.1904H297.342V85.7607Z" fill="black"/>
            </g>
            <defs>
              <filter id="filter0_d_13_1716" x="0.876709" y="0.213867" width="321.465" height="114.547" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="12.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.917647 0 0 0 0 0.945098 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_1716"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_1716" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
        <div></div>

        <div></div>
        <div><img className={`frame frame${frameid} big`} src={FRAMES[`frame${frameid}`]["frame"]} alt="mainframe"></img></div>
        <div></div>
        <div className="grid-frame">
          <div className="photo-grid">
          {photos.map((value, index) => {
              return ( 
                <div onClick={()=>{addPhoto(index)}} className={`${index}`} key={index}><img src={value}/></div>
                );
              })}
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="next-btn">{checkFrames()
          ?
            <Link onClick={sendFiles}>
                <svg className="send-file-btn" onClick={sendFiles} width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="75" height="75" rx="12" fill="#080E1C"/>
                    <path d="M35.1328 47.3594L43.5703 38.9219H23.7266V34.3125H43.5703L35.1328 25.9141L38.2969 22.7891L52.1641 36.6172L38.2969 50.4844L35.1328 47.3594Z" fill="#D2D5DC"/>
                </svg>
            </Link>
            :
            <></>}</div>
        {<>
          {[...Array(currnetFrame["maxCount"]).keys()].map((value, index) => {
              return (
                <img className={`frame frame${currnetFrame["frameID"]} picture picture${index+1}`} src={SelectedPhotos[value]} alt="logo image" onClick={()=>{removePhoto(value)}}></img>
                );
            })}
        </>}
        
        <Outlet/>
    </div>
  )
};

export default SelectPhotoPage;