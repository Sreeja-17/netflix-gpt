import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PosterVideos from "./posterVideos";




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
            path:"/video",
            element:<PosterVideos/>
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
};
export default Body;