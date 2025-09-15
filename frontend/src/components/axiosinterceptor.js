import axios from "axios";

const axiosInstance=axios.create({//create axiosInstance 
    baseURL:'/api'//ithu nammudei url ahhnu port number nammalude swantham port number ahhnu
})
axiosInstance.interceptors.request.use((config)=>{//token read cheithu attach cheiyanam 
    const accessToken=localStorage.getItem("token")//tokenn read cheithu edukum 
    if(accessToken){
        if(config){
            config.headers.token=accessToken;//ee accesstoken ahh token lu store cheium /ahh token evidenu vacha backend lu routes lu token use cheithu irukum
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error)//promise assynchronise operation 
})
export default axiosInstance;