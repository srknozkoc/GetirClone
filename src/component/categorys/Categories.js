import './categories.css'
import {useState , useEffect} from "react";
import categoriesData from '../../api/categorys.json'
import Category from "../Ui/category";

export default function Categories() {

    const [categories , setCategories] = useState([])

    useEffect(() => {
        setCategories(categoriesData)
    },[])

    return (
        <div className={'w-full bg-white'}>
            <div className={'categories'}>
                <h2 className={'text-sm font-semibold mb-3'}>Kategoriler</h2>
                <div className={'grid grid-cols-10'}>
                    {categories && categories.map((category , index) => <Category key={index} category={category} />)}
                </div>
            </div>
        </div>
    );
}