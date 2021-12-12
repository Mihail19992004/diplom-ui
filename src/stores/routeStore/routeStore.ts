
import {routes} from '../../assets/routes/Routes'
import permissionStore from "../permissionStore/permissionStore";
export class RouteStore {


    constructor() {
        this.setAvailableRoutes()
    }
    availableRoutes = routes

    linkStyle = {
        width: `calc(100% / ${this.availableRoutes.length})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(254, 254, 254, 0.66)',
        cursor: 'pointer',
        '&:hover': {
            background: 'white'
        },

    }


    setAvailableRoutes = (): void => {
        if (permissionStore.permissionRole === 'admin') {
            this.availableRoutes = routes
        } else {
            this.availableRoutes = routes.filter(route => route.permission === 'user')
        }
    }
}