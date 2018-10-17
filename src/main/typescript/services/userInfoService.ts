import JsCookie from 'js-cookie';

export type Cookies = {
    auth: boolean
}
const USER_INFO_KEY = 'userInfo';

export default {
    async retrieve(): Promise<Cookies> {
        const userInfo = JsCookie.get(USER_INFO_KEY);
        console.log(`userInfo when retrieve: ${userInfo}`);
        return {auth: !!userInfo}
    },
    set(): boolean {
        console.log(JsCookie.get(USER_INFO_KEY));
        console.log("setting to true");
        return JsCookie.set(USER_INFO_KEY, true);
    },
    remove(): boolean {
        return JsCookie.remove(USER_INFO_KEY);
    }
}