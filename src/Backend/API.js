import axios from 'axios';

export default class API
{

    constructor(type)
    {
        this.type=type;
        this.instance=axios.create({baseURL:process.env.REACT_APP_API+`/${this.type}`});
    }

    Get(params=[],options={}){
       return this.instance.get(params.length>0?`/${params.join('/')}`:'',options).catch(err=>err);
    }
    Add(body,params=[],options={}){
        return this.instance.post(params.length>0?`/${params.join('/')}`:'',body,options).catch(err=>err);
     }
    Update(body,params=[],options={}){
        return this.instance.put(params.length>0?`/${params.join('/')}`:'',body,options).catch(err=>err);
     } 
    Delete(params=[],options={}){
        return this.instance.delete(params.length>0?`/${params.join('/')}`:'',options).catch(err=>err);
    } 
    Patch(body,params=[],options={}){
        return this.instance.patch(params.length>0?`/${params.join('/')}`:'',body,options).catch(err=>err);
    } 
}