
const Category = ({category}) => {
    const {idCategory, strCategory, strCategoryThumb} = category;
    return (
        <div className="p-10">
            <div>
                <img src={strCategoryThumb} alt="" />
            </div>
            <h3>{strCategory}</h3>
        </div>
    );
};

export default Category;