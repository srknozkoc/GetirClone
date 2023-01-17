import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {Link, useParams} from "react-router-dom";

export const CATEGORY_ITEM_VARIANTS = {
    VERTICAL: 'verical',
    HORIZONTAL: 'horizontal',
};

export default function CategoryItem(props) {
    const {categorySlug} = useParams();
    const {VERTICAL, HORIZONTAL} = CATEGORY_ITEM_VARIANTS;

    const variant = props.variant || HORIZONTAL;
    const {id, name, slug, picURL, subCategories} = props.categoryItem;

    const [isActive, isVertical, isHorizontal] = [categorySlug === slug, variant === VERTICAL, variant === HORIZONTAL];

    const cnWrapper = cn(
    );

    const cnLink = cn(
        'flex items-center gap-x-3 py-1 px-2 tracking-tight hover:bg-[#f3f0fe]',
        isVertical ? 'flex-col gap-3' : '',
        isActive ? 'bg-[#f3f0fe]' : '',
    );

    const cnImage = cn(
        'rounded border',
        isVertical ? 'w-12 h-12' : '',
        isHorizontal ? 'w-8 h-8' : '',
    );

    const cnSubWrapper = cn(
        'ml-12',
    );

    const getSubCategoryPath = (subCategory) => {
        return `/kategori/${categorySlug}/${subCategory?.['slug']}`;
    };

    const onSubCategoryLinkClicked = (e, subCategory) => {
        const elmTarget = document.getElementById(subCategory?.['slug']);
        if (!elmTarget) return;

        window.scrollTo({
            left: 0,
            behavior: "smooth",
            top: elmTarget.offsetTop - 135,
        })
        return e.preventDefault();
    };

    // optional chaining
    return (
        <div className={cnWrapper}>
            <Link to={`/kategori/${slug}`} id={id} className={cnLink}>
                <img src={picURL} alt={name} className={cnImage}/>
                <span className={'text-sm text-gray-600'}>{name}</span>
            </Link>
            {isActive && !!subCategories.length && (
                <ul className={cnSubWrapper}>
                    {subCategories.map((subCategory) => (
                        <li key={subCategory?.id} className={'ml-1 text-sm'}>
                            <Link
                                className={'block py-1'}
                                onClick={(e) => onSubCategoryLinkClicked(e, subCategory)}
                                to={getSubCategoryPath(subCategory)}
                            >
                                {subCategory?.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

CategoryItem.propTypes = {
    categoryItem: PropTypes.object.isRequired,
    variant: PropTypes.oneOf([CATEGORY_ITEM_VARIANTS.VERTICAL, CATEGORY_ITEM_VARIANTS.HORIZONTAL]),
};