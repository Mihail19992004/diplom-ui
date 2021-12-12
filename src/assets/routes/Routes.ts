import {FC} from "react";
import Sales from "../../components/Sales/Sales";
import Breakfast from "../../components/Breackfast/Breakfast";

interface RoutesInterface {
    id: number,
    name: string,
    path: string,
    permission: 'admin' | 'user' | 'unauthorized'
    component: FC
}


export const routes: Array<RoutesInterface> = [
    {
        id: 1,
        name: 'Sales',
        component: Sales,
        permission: "unauthorized",
        path: '/sales'
    },
    {
        id: 2,
        name: 'Breakfast',
        component: Breakfast,
        permission: "unauthorized",
        path: '/breakfast'
    }
]
