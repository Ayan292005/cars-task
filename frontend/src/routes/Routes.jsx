import UserRoot from "../pages/UserRoot"
import Add from "../pages/addPage"
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
            },
            {
                path: "/cars/add",
                element: <Add />,
            }
        ]
    }
]
export default Routes