import {computed, makeAutoObservable, observable} from "mobx";


class Permission {
    constructor() {
        makeAutoObservable(this)
        this.authenticate({token: localStorage.getItem('token') || ''})
    }

   @observable isAuth: boolean = false
    token?: string

    permissionRole: 'all' | 'admin' = "all"

    @computed authenticate = (token: {token: string}): void => {
        if (token.token.length) {
            this.permissionRole = 'admin'
            this.isAuth = true;
            this.token = token.token
            console.log(typeof token.token, 'token')
            localStorage.setItem('token', token.token);
        }
    }
}

export default new Permission();