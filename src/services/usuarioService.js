import axios from "axios"

class UsuarioService{

    async Cadaster(data){
        return axios({
            url:"http://192.168.1.105:3000/cadastrar",
            method: "POST",
            timeout: 7000,
            data: data,
            headers:{
                Accept: 'application/json'
            }
        }).then((response) =>{
            return Promise.resolve(response)
        }).catch((error) =>{
            return Promise.reject(error)
        })
    }

}

const userService = new UsuarioService()
export default userService