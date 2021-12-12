import {Fetch} from "../../services/Rests/fetch";
import {computed, makeAutoObservable, observable} from "mobx";
import { uuid } from 'uuidv4';
class AuthStore {
    constructor() {
        makeAutoObservable(this);
    }

    @observable authMethod = new Fetch();
    @observable activeToggleItem: string = 'Login';

    toggleItems: Array<{value: string, id: string}> = [{ value: 'Login', id: uuid()}, { value: 'Registration', id: uuid()}];
    isAuth: boolean = false;
    @computed setActiveItem = (item: string) => {
        this.activeToggleItem = item
        console.log(this.activeToggleItem)
    }

}
export default new AuthStore();