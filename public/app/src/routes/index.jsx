import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "layouts/Login/Login.jsx";

const indexRoutes = [
    { 
        path: "/dashboard", component: Dashboard,
    },
    {
        path: "/Login", component: Login
    },
    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default indexRoutes;
