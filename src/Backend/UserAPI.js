import API from "./API";



export default class UserAPI extends API{

    constructor(){
        super('User');
    }

    Login(user){
        return this.Post(user,'signIn');
    }

    SignUp(user){
        return this.Post(user,'signUp');
    }
}