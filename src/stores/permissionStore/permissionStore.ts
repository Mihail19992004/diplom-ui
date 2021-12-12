import {computed, makeAutoObservable, observable} from "mobx";

class Permission {
    constructor() {
        makeAutoObservable(this)
        this.authenticate({token: localStorage.getItem('token') || ''})
    }

   @observable isAuth: boolean = false
    token?: string

    @computed authenticate = (token: {token: string}): void => {
        if (token.token.length > 5) {
            this.isAuth = true;
            this.token = token.token
            console.log(typeof token.token, 'token')
            localStorage.setItem('token', token.token);
        }
    }
}

export default new Permission();