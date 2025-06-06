import { Link, useLoaderData } from "react-router";
import Meal from "../Meal/Meal";

const Receipes = () => {
    const receipes = useLoaderData();
    const {meals} = receipes;
    return (
        <div>
            <h2>Receipes will load here</h2>
            <div>
                {
                    meals.map((meal, index) => <Meal key={index} meal={meal}></Meal>)
                }
                <Link className="p-5 bg-black text-white mt-10" to={-1}><button>Go back</button></Link>
            </div>
        </div>
    );
};

export default Receipes;