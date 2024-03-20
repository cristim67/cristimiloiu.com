import {Routes, Route} from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour.component";
import Home from "../views/Home.view.tsx";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
