import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import ChefService from "../components/ChefService";
import PopularMenu from "../components/PopularMenu";
import Call from "../components/Call";
import Card from "../components/Card";
import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
                  <title>Bistro Boss | Home</title>
              </Helmet>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <Call />
      <Card />
      <Featured />
      <Testimonials/>
    </div>
  );
}

export default Home;
