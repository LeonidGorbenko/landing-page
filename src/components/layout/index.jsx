import { Outlet } from "react-router";
import Footer from "../../sections/Footer";
import Navigation from "../../sections/Navigation";
function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
