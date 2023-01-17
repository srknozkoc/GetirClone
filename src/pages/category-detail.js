import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

import {CATEGORIES_KEY, getCategoryBySlug} from "../api/categories-api";

import SkeletonLoading from "../component/products/skeleton-loading";

export default function CategoryDetail() {
    const {categorySlug = 'yeni-urunler-OcXAkcBF1S'} = useParams();

    const {isLoading, error, data: categoryDetail} = useQuery({
        queryKey: [CATEGORIES_KEY, categorySlug],
        queryFn: getCategoryBySlug(categorySlug),
    });

    return (
        <div>
            {isLoading && <SkeletonLoading />}
            {!isLoading && error && 'Kategori getirilirken hata oluştu!'}

            <div className={'flex flex-col gap-12 '}>
                {!isLoading && categoryDetail?.['subCategories'].map((subCategory) => {
                    return (
                        <div key={subCategory?.['id']}>
                            <h4 id={subCategory?.['slug']} className={'font-bold text-lg'}>{subCategory?.name}</h4>
                            <div className={'grid grid-cols-4 gap-6'}>
                                {subCategory?.['products']?.map((product) => {
                                    return (
                                        <div key={product?.['id']} className={'flex flex-col items-center gap-1'}>
                                            <img src={product?.['squareThumbnailURL']} alt={product?.['name']} className={'w-36 h-36'}/>
                                            <h6 className={'text-sm'}>
                                                {!product?.['struckPriceText'] ? <>
                                                        <span
                                                            className={'line-through text-gray-400'}>{product?.['struckPriceText']}</span>
                                                        <span
                                                            className={'text-primary-brand-color'}>{product?.['priceText']}</span></>
                                                    : product?.['priceText']}
                                            </h6>
                                            <h3 className={'text-sm text-center font-semibold'}>{product?.['shortName']}</h3>
                                            <h6 className={'text-sm text-gray-400'}>{product?.['shortDescription']}</h6>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}