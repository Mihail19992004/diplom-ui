import {rests} from '../Url/RestTemplate'
import {Loading} from "./Loading";
import permissionStore from "../../stores/permissionStore/permissionStore";

export class Fetch{

    permission = permissionStore
    loadingMethods = new Loading()
    message?: {isSuccess: boolean, info: string}

    get = async (id: number): Promise<any> => {
        try {
            this.loadingMethods.setIsLoading(true)
            const response = await fetch(rests.GET_INFO.rest + `/${id}`, rests.GET_INFO.options)
            this.loadingMethods.setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    getAll = async (): Promise<any> => {
        try {
            const response = await fetch(rests.GET_INFO.rest,
                rests.GET_INFO.options);
        } catch (error) {
            console.log(error)
        }
    }

    auth = async (user: any): Promise<any> => {
        try {
            const response = await fetch(rests.AUTH_SERVICE.rest,
                {method: 'POST', headers: {
                        'content-type': 'application/json'
                    }, body: JSON.stringify(user)});
            const data: { title: string, message: {token: string} } = await response.json()
            if (response.status === 200) {
                this.message = {isSuccess: true, info: data.title};
                this.permission.authenticate(data.message)
            }
        } catch (error: any) {
            console.log(this.message)
            this.message = { isSuccess: false, info:error.message }
        }
    };
    registration = async (user: any): Promise<any> => {
        try {
            // this.loadingMethods.setIsLoading(true)
            const response = await fetch(rests.REGISTRATION_SERVICE.rest,
                {method: 'POST', headers: {
                    'content-type': 'application/json'
                    }, body: JSON.stringify(user)});
            // this.loadingMethods.setIsLoading(false)
            const data: { title: string, message: string } = await response.json()
            this.message = { isSuccess: true, info: data.title }
            console.log(this.message)
        } catch (error: any) {
            // this.loadingMethods.setIsLoading(false)
            this.message = { isSuccess: false, info:error.title }
            console.log(this.message)
        }
    };


}