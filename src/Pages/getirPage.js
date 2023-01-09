import React from "react";
import Card from "../component/card/Card";
import Header from "../component/header/Header";
import Signİn from "../component/modal/sign-in";
import Footer from "../component/footer/Footer";
import Campaigns from "../component/campaigns/Campaigns";
import HeroSection from "../component/section/HeroSection";
import Categories from "../component/categorys/Categories";

export default function GetirPage () {
    return(
        <div>
            <Header/>
            <Signİn/>
            <HeroSection/>
            <Categories/>
            <Campaigns/>
            <Card/>
            <Footer/>
        </div>
    )
}