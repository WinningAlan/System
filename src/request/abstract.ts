/*
 * @Author: your name
 * @Date: 2021-04-06 17:48:53
 * @LastEditTime: 2021-04-06 18:01:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\request\Abstract .ts
 */
import { HOST } from './config';
import instance from './intercept';
import { AxiosRequest, CustomResponse } from './types';
import msg from "../utils/msg"
import {getSession,setSession} from '../utils/session'

// 外部传入的baseUrl
const token = getSession("user") ? getSession("user").Token : "",
    reqURL = HOST,
    header: object = {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        token: token
    };

class Abstract {
    private apiAxios({ baseURL = reqURL, headers = header, method, url, data, params, responseType, show }: AxiosRequest): Promise<CustomResponse> {
        return new Promise((resolve, reject) => {
            instance({
                baseURL,
                headers,
                method,
                url,
                params,
                data,
                responseType,
            }).then((res) => {
                if (res.headers.token) {
                    resetToken(res.headers);
                }
                // 200:服务端业务处理正常结束
                if (res.status === 200) {
                    if (res.data.success) {
                        resolve({ status: true, message: 'success', data: res.data?.data, origin: res.data });
                    } else {
                        msg.warning(res.data?.message)
                        resolve({ status: false, message: res.data?.message, data: res.data?.data, origin: res.data });
                    }
                } else {
                    resolve({ status: false, message: res.data?.message, data: null });
                }
            }).catch((err) => {
                const message = err?.data?.message || err?.message;
                msg.warning(message)
                reject({ status: false, message, data: null });
            });
        });
    }

    /**
     * GET类型的网络请求
     */
    protected getRequest({ url, data, params, responseType, show }: AxiosRequest) {
        return this.apiAxios({ method: 'GET', url, data, params, responseType, show });
    }

    /**
     * POST类型的网络请求
     */
    protected postRequest({ url, data, params, responseType, show }: AxiosRequest) {
        return this.apiAxios({ method: 'POST', url, data, params, responseType, show });
    }

    /**
     * PUT类型的网络请求
     */
    protected putRequest({ url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ method: 'PUT', url, data, params, responseType });
    }

    /**
     * DELETE类型的网络请求
     */
    protected deleteRequest({ url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ method: 'DELETE', url, data, params, responseType });
    }
}

export default Abstract;


function resetToken(header: any) {
    let userInfo = getSession("user");
    delete userInfo["Token"];
    userInfo["Token"] = header.token;
    setSession("user", userInfo);
}
