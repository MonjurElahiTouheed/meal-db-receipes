import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import Meal from "../Meal/Meal";

const Receipes = () => {
    const receipes = useLoaderData();
    const { meals } = receipes;
    console.log(receipes)
    const navigate = useNavigate();
    const handleGoback = () => navigate(-1);
    const params = useParams()
    console.log(params);
    return (
        <div>
            <h2>Receipes will load here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    meals.map((meal, index) => <Meal key={index} meal={meal}></Meal>)
                }

            </div>
            <button className="px-8 py-4 bg-black text-white text-xl font-semibold mt-6 rounded-xl" onClick={handleGoback}>Go back</button>
        </div>
    );
};

export default Receipes;