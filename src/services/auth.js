import axios from "axios";
const URL="https://notisticserver.herokuapp.com/";

class AuthService{
    async login(username,password,keep){
        console.log(keep)
        const response = await axios.post(URL + "signin", {
            username,
            password
        });
        if (response.data.accessToken) {
                response.data.keep=keep;
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    logout(){
        console.log("loged out")
        localStorage.removeItem("user");
    }

    async register(username,email,password){
        const response = await axios.post(URL + "signup", {
            username,
            email,
            password
        });
        return response.data;
    }
    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();