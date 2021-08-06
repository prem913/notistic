import axios from "axios";
import AuthHeader from "./auth-header";
const URL="https://notisticserver.herokuapp.com/";
class UserService{
    async getPublicContent(){
        return await axios.get(URL+"public",{
            headers:AuthHeader()
        });
    }
    async get(){
        return await axios.get(URL+"user",{
            headers:AuthHeader()
        });
    }
    async add(title,des){
        const response=await axios.post(URL+"user",{
            title,
            des,
        },{
            headers:AuthHeader(),
        });
        return response;
    }
    async delete(_id){
        const res=await axios.delete(URL+"user",{
            headers:AuthHeader(),
            data:{
                _id,
            }
        }
        );
        return res;
    }
};

export default new UserService();