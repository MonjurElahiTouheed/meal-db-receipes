import { Outlet, useLocation, useNavigation } from "react-router";
import Navbar from "../Navbar/Navbar";
import { DotLoader } from "react-spinners";
const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? <div className="flex justify-center items-center mt-[300px]"><DotLoader size={80} color='yellow' /></div> : <Outlet></Outlet>
            }
            
        </div>
    );
};

export default Home;