import { UiRoutes } from "../../Routes/UiRoutes";
import Login from "./Login";
import Register from "./Register";

export const AuthConfig = [
    {
    path: UiRoutes.website.login,
    element: <Login />
    },
    {
    path: UiRoutes.website.register,
    element: <Register />
    }
]