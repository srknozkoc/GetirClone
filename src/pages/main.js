import {Outlet} from "react-router-dom";

import Header from "../component/header/Header";
import HeaderDown from "../component/header/headerDown";
import CategoriesList from "../component/categories/category-list";
import {Basket} from "../component/basket/basket";

export default function Main() {
    return (
        <div>
            <div className={'sticky z-40 top-0'}>
                <Header/>
                <HeaderDown/>
            </div>
            <div className="container max-w-[1232px] mx-auto grid grid-cols-12 items-stretch gap-6 mt-6">
                <div className="col-span-3">
                    <CategoriesList/>
                </div>
                <div className="col-span-6">
                    <Outlet/>
                </div>
                <div className="col-span-3">
                    <Basket/>
                </div>
            </div>
        </div>
    )
}