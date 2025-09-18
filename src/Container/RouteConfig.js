import { adminConfig } from "./Admin/adminConfig";
import { AuthConfig } from "./Auth/AuthConfig";
import { UiConfig } from "./UI/UiConfig";

export const RouteConfig = [
    ...UiConfig,
    ...AuthConfig,
    ...adminConfig,
]