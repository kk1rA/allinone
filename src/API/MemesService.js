import axios from "axios";

export default class MemesService {
    static async getRandomMemeImage() {
        return await axios.get(``); 
    }
}