import axios from "axios";

export const CATEGORIES_KEY = 'categories';

export const getCategories = () => {
    return axios
        .get("/json/categories.json")
        .then((res) => res?.data?.categories)
};

export const getCategoryBySlug = (categorySlug) => {
    return () => new Promise((resolve) => {
        axios
            .get(`/json/${categorySlug}.json`)
            .then((res) => {
                setTimeout(() => resolve(res?.data?.category), 1000);
            })
    });
};