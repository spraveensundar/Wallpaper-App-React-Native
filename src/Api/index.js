import axios from "axios";

const API_KEY="44470563-928254ad74beb747f54cf64c8";

const apiURL =`https://pixabay.com/api/?key=${API_KEY}`;


const formalURL =(params)=>{

    let url=apiURL+"&per_page=26&safesearch=true&editors_choice=true";

    if(!params) return url;

    let paramsKeys= Object.keys(params);

    paramsKeys.map(key=>{
        let value = key=="q"? encodeURIComponent(params[key]) : params[key];

        url += `&${key}=${value}`;
    });
    console.log("finalurl",url);
    return url;

}

export const apiCall = async (params)=>{

    try{

        const response = await  axios.get(formalURL(params));

        const {data} =  response;

        return {success: true , data}
    }catch(err){
        console.log("got error", err.message);
        return {success: false, msg: err.message}
    }
}

