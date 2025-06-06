import { useNavigate } from "react-router";

const Category = ({category}) => {
    const {strCategory, strCategoryThumb} = category;
    const navigate = useNavigate();
    const handleShowReceipes = () => navigate(`/categories/${strCategory}`);
    return (
        <div className="p-10 border-2 border-yellow-300 rounded-2xl">
            <div>
                <img src={strCategoryThumb} alt="" />
            </div>
            <h3 className="text-2xl mt-10">{strCategory}</h3>
            <button onClick={handleShowReceipes} className="px-6 text-amber-700 hover:bg-yellow-500 duration-200 text-base font-semibold py-2.5 bg-yellow-400 rounded-xl mt-5">Show receipes</button>
        </div>
    );
};

export default Category;