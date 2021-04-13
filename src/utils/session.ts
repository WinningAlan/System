/*
 * @Author: your name
 * @Date: 2021-04-02 15:41:06
 * @LastEditTime: 2021-04-02 18:05:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \System\src\utils\session.ts
 */
export const setSession = (name: string, data: any) => {
    if (!name) { return };
    if (typeof data !== 'string') {
        try {
            data = JSON.stringify(data);

        } catch (error) {
            return false
        }
    }
    sessionStorage.setItem(name, data)

}

export const getSession = (name: string) => {
    if (!name) { return }
    let content: any = window.sessionStorage.getItem(name)
    try {
        return JSON.parse(content)
    } catch (error) {
        return null
    }
}