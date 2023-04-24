import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Link,
    Route,
    RouterProvider
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Data from "./Data";

function App() {

    const route = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root/>}>
                <Route path="/" index element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/data" element={<Data/>}></Route>
            </Route>
        )
    )

    return (
        <div className="App">
            <RouterProvider router={route} />
        </div>
    );
}

export default App;


const Root = () => {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/data">Data</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
