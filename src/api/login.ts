/*
 * @Author: your name
 * @Date: 2021-04-06 18:02:28
 * @LastEditTime: 2021-04-06 18:16:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\api\login.ts
 */
import Abstract from "../request/abstract";

class basic extends Abstract {
    login(params: any) {
        return this.postRequest({ url: "/api/v1/Account/Login", params })
    }
}

let login;
export default (function(){
    if(login){return login}
    login = new basic();
    return login;
})()