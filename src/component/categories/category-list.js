import {useQuery} from "@tanstack/react-query";

import CategoryItem from "./category-item";
import {CATEGORIES_KEY, getCategories} from "../../api/categories-api";

export default function CategoryList() {
    const {isLoading, error, data: categories} = useQuery({
        queryKey: [CATEGORIES_KEY],
        queryFn: getCategories,
    });

    return (
        <div className={''}>
            <h2 className={'text-sm font-semibold mb-3'}>Kategoriler</h2>
            {isLoading && 'Loading'}
            {!isLoading && error && 'Kategoriler getirilirken hata oluştu!'}
            <div className={'flex flex-col'}>
                {!isLoading && categories.map((categoryItem) => {
                    return <CategoryItem key={categoryItem?.id} categoryItem={categoryItem} />
                })}
            </div>
        </div>
    );
}