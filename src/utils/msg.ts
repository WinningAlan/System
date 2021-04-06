/*
 * @Author: your name
 * @Date: 2021-04-01 15:46:09
 * @LastEditTime: 2021-04-02 17:48:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\utils\msg.ts
 */
import { ElMessage } from 'element-plus';
export default {
    success: (msg: string, time: number = 1500) => {
        ElMessage({
            type: 'success',
            duration: time,
            message: msg,
            center: true
        })
    },
    warning: (msg: string, time: number = 1500) => {
        ElMessage({
            type: 'warning',
            duration: time,
            message: msg,
            center: true
        })
    },
    error: (msg: string, time: number = 1500) => {
        ElMessage({
            type: 'error',
            duration: time,
            message: msg,
            center: true
        })
    },
    info: (msg: string, time: number = 1500) => {
        ElMessage({
            type: 'info',
            duration: time,
            message: msg,
            center: true
        })
    }
}
