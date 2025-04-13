import React from "react";
import TopNav from "../components/Navs/TopNav";
import MainNav from "../components/Navs/MainNav";
import CategoryNav from "../components/Navs/CategoryNav";
import { Outlet } from "react-router-dom";
import ResponsiveNavbar from "../components/Navs/ResponsiveNavbar";

const Layout = () => {
  return (
    <div className="">
      {/* Topbar Nav Section */}
      <section className="bg-slate-200 py-2">
        <TopNav />
      </section>
      {/* Main Nav Section */}
      <section className="my-4">
        <MainNav />
      </section>
      {/* Cateogry based Nav Section */}
      <section>
        {/* <CategoryNav /> */}
        <ResponsiveNavbar/>
      </section>
      {/* Main Section */}
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
