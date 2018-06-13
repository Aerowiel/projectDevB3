import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "layouts/Login/Login.jsx";
import SearchCard from "layouts/SearchCard/SearchCard";

const indexRoutes = [
    { 
        path: "/Dashboard", component: Dashboard,
    },
    {
        path: "/Login", component: Login
    },
    {
        path: "/SearchCard", component: SearchCard
    }
];

export default indexRoutes;
