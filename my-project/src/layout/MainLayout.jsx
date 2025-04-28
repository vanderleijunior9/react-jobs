import { Outlet } from "react-router-dom";
import Navbar from '/Users/vanderleijunior/Desktop/Frontend Projects/react-jobs/src/components/Navbar.jsx';


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
