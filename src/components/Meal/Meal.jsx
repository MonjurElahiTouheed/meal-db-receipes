
const Meal = ({meal}) => {
    const {idMeal, strMealThumb, strMeal} = meal;
    return (
        <div className="border-2 border-orange-300 rounded-3xl p-8">
            <div><img src={strMealThumb} alt="#strmeal" /></div>
            <h3 className="text-3xl">{strMeal}</h3>
        </div>
    );
};

export default Meal;