import {computed, makeAutoObservable, observable} from "mobx";
// import {Fetch} from "../../services/Rests/fetch";
import backgroundImage from "../../assets/img/restik_on_auth.jpg";
import filial from '../../assets/img/filial.jpg'
interface ContentSliderProps {
    image: string,
    header: string,
    description: string
}

class SliderContent {

    constructor() {
        makeAutoObservable(this)
    }

    @observable content: Array<ContentSliderProps> = [
        {
            header: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: backgroundImage,
        },
        {
            header: "Открытие нового филиала нашего рестарана",
            description: "Hello World!",
            image: filial,
        }
        ]

    @computed setContent = (content: Array<ContentSliderProps>) => {
        this.content = content
    }
}

export default new SliderContent()