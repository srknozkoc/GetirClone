import {useQuery} from "@tanstack/react-query";

import CategoryItem, {CATEGORY_ITEM_VARIANTS} from "./category-item";
import {CATEGORIES_KEY, getCategories} from "../../api/categories-api";

import './categories.css';

export default function CategoryListHome() {
    const {isLoading, error, data: dataCategories} = useQuery({
        queryKey: [CATEGORIES_KEY],
        queryFn: getCategories,
    });
    const categories = dataCategories?.filter(({ type }) => type === 1);

    return (
        <div className={'w-full bg-white'}>
            <div className={'categories'}>
                <h2 className={'text-sm font-semibold mb-3'}>Kategoriler</h2>
                <div className={'grid grid-cols-10'}>
                    {isLoading && 'Loading'}
                    {!isLoading && error && 'Kategoriler getirilirken hata oluştu!'}
                    {categories && categories.map((categoryItem) => {
                        return <CategoryItem key={categoryItem?.id} categoryItem={categoryItem} variant={CATEGORY_ITEM_VARIANTS.VERTICAL}/>;
                    })}
                </div>
            </div>
        </div>
    );
}