import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/**
 * 경로가 변경될 때마다 페이지의 맨 위로 스크롤 이동되는 함수
 */
export const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};