import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ScrollToTop } from "./components/CommonUtil";
import MainPage from "./pages/MainPage";
import PicturePage from "./pages/PicturePage";
import SelectFramePage from "./pages/SelectFramePage";
import PictureCompletedPage from "./pages/PictureCompletedPage";
import SelectPhotoPage from "./pages/SelectPhotoPage";
import SuccessPage from "./pages/SuccessPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <MainPage /> },
    {
        path: '/picture',
        element: <PicturePage /> ,
        children: [
            { path: 'completed', element: <PictureCompletedPage />},
            { path: 'select-frame', element: <SelectFramePage />},
            { path: 'select-photo', element: <SelectPhotoPage />},
            { path: 'success', element: <SuccessPage />}
        ]
    },
    { path: '*', element: <NotFoundPage />}
  ];

  return useRoutes(routes);
};

function App() {
  return (
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
  );
}

export default App;