import React, {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import Card from "../component/card/Card";
import Header from "../component/header/Header";
import SignIn from "../component/modal/sign-in";
import Footer from "../component/footer/Footer";
import Campaigns from "../component/campaigns/Campaigns";
import HeroSection from "../component/section/HeroSection";
import CategoryListHome from "../component/categories/category-list-home";

export default function Landing() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('isLoggedIn')) {
            navigate('/kategoriler');
        }
    }, [navigate, searchParams]);

    return (
        <>
            <Header/>
            <SignIn/>
            <HeroSection/>
            <CategoryListHome/>
            <Campaigns/>
            <Card/>
            <Footer/>
        </>
    )
}