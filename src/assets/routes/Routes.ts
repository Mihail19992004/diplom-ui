import {FC} from "react";
import Sales from "../../components/Sales/Sales";
import Breakfast from "../../components/Breackfast/Breakfast";
import Main from "../../components/Main/Main";

interface RoutesInterface {
    id: number,
    name: string,
    path: string,
    permission: 'admin' | 'user'
    component: any
}


export const routes: Array<RoutesInterface> = [
    {
        id: 3,
        name: 'All',
        component: Main,
        permission: "admin",
        path: '/'
    },
    {
        id: 1,
        name: 'Sales',
        component: Sales,
        permission: 'admin',
        path: '/sales'
    },
    {
        id: 2,
        name: 'Breakfast',
        component: Breakfast,
        permission: 'admin',
        path: '/breakfast'
    },

]
