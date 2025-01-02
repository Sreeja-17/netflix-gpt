import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PlayVideo from "./PlayVideo";




const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },

        {
            path: "/browse/video/:movieId",
            element: <PlayVideo />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
};
export default Body;