import axios from "axios";

export default class PostsService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            }
        });
        return response;
    }

    static async getPostById(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
    }

    static async getPostCommentById(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`); 
    }
}