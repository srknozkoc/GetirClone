import Header from "../component/header/Header";
import HeaderDown from "../component/header/headerDown";
import CategoriesList from "../component/categorys/categories-list";


export default function HomePage() {
    return (
        <div>
            <div className={'sticky z-40 top-0'}>
                <Header/>
                <HeaderDown/>
            </div>
            <CategoriesList/>
        </div>
    )
}