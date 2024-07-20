import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Error from "./Components/Error.js"
import Contact from "./Components/Contact.js"
import ResMenu from "./Components/ResMenu.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utlis/UserContext.js";
import { useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import appStore from "./utlis/appStore.js";
import Cart from "./Components/Cart.js";
import ResCard, { withPromotedLabel } from "./Components/ResCard.js";
import Hero from "./Components/Hero.js";
import ResSection from "./Components/ResSection.js";
import { LIST_API } from "./utlis/constant.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lang from "./utlis/languageConstant.js";
import Cursor from "./Components/Cursor.js";

// import Grocery from "./Components/Grocery.js";




// Chunking
// Code Spliting        -> you have to chunk your application
// Dynamic Bundling
// Lazy Loading
// On Demand 

const Grocery = lazy(() => import("./Components/Grocery.js"));

const AppLayout = () => {
const langkey  = useSelector(store => store.config.lang);



    const [userName, setUserName] = useState();
    //authentication
    useEffect(() => {
        const data = {
            name: lang[langkey].name,
        };
        setUserName(data.name);
    }, [langkey]);
    return (
        <Provider store={appStore}>
            
          <ToastContainer />
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className="app">
                    <Cursor/>
                    <Header />
                    <Outlet />


                </div>
            
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />

            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <ResMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={appStore}>
        <RouterProvider router={appRouter} />
    </Provider>
);