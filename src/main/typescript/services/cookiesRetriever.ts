import JsCookie from 'js-cookie';

export type Cookies = {
    auth: boolean
}

export default {
    async retrieve(): Promise<Cookies> {
        const userInfo = JsCookie.get('userInfo');
        return {auth: !!userInfo}
    }
}