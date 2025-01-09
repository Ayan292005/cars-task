import UserRoot from "../pages/UserRoot"
import Cars from "../pages/cars"
import Details from "../pages/details"

const Routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [

            {
                path: "/cars",
                element: <Cars/>,

            },
            {
                path: "/cars/:id",
                element: <Details />,
            }
        ]
    }
]
export default Routes