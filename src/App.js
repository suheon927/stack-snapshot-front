import React, { Children } from "react";
import { BrowserRouter } from "react-router-dom";


// import Mainpage from "./pages/MainPage";

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <MainPage /> },
    {
      path: '/picture', element: <PictureMain />,
      children: [
        { path: '', element: <PictureResult /> }
      ]
    },
    {
      path: '/edit-picture', element: <EditPicture />,
      children: [
        { path: '', element: <SelectFrame /> }
      ]
    },
    {
      path: '/success', element: <Success />,
      children: [
        { path: '', element: <SuccessResult /> }
      ]
    }
  ]);

  return routes;
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
