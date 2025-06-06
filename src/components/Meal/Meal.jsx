
const Meal = ({meal}) => {
    const {strMealThumb, strMeal} = meal;
    return (
        <div className="border-2 border-orange-300 rounded-3xl p-8 flex justify-center items-center flex-col gap-5 mt-10">
            <div><img className="rounded-2xl" src={strMealThumb} alt="#strmeal" /></div>
            <h3 className="text-3xl">{strMeal}</h3>
        </div>
    );
};

export default Meal;