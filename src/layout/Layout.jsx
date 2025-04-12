import React from "react";
import Home from "../pages/Home/Home";
import TopNav from "../components/Navs/TopNav";
import MainNav from "../components/Navs/MainNav";
import CategoryNav from "../components/Navs/CategoryNav";

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
        <CategoryNav />
      </section>
      {/* Main Section */}
      <main>
        <Home />
      </main>
    </div>
  );
};

export default Layout;
