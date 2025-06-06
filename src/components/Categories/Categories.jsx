import { useLoaderData } from "react-router";
import Category from "../Category/Category";

const Categories = () => {
    const categoriesData = useLoaderData();
    console.log(categoriesData.categories);
    const {categories} = categoriesData;
    console.log(categories)
    return (
        <div>
            <h2 className="text-2xl mt-10">Categories: {categories.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
                {
                    categories.map(category => <Category key={category.idCategory} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;