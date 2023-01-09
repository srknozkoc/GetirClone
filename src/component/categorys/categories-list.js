import {useState , useEffect} from "react";
import categoriesListData from '../../api/categorys-list.json'
import CategoryList from "../Ui/categoryList";

export default function CategoriesList() {

    const [categories , setCategories] = useState([])

    useEffect(() => {
        setCategories(categoriesListData)
    },[])

    return (
        <div className={'w-full bg-white'}>
            <div className={'bg-white container mx-auto flex flex-col items-start max-w-[1232px] py-4 bg-white'}>
                <h2 className={'text-sm font-semibold mb-3'}>Kategoriler</h2>
                <div>
                    {categories && categories.map((categoryItem , index ,) => <CategoryList key={index} categoryList={categoryItem} />)}
                </div>
            </div>
        </div>
    );
}