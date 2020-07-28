import { selector } from 'recoil';

import PostService, { posts } from '../../services/PostService';
import { WebConfigState } from '../atoms/WebConfigAtom';

export const setToggleDarkMode = selector({
    key: 'toggleDarkMode',
    set: ({ get, set }) => {
        const curState = get(WebConfigState);

        set(WebConfigState, !curState);
    }
});

export const getAll = selector({
    key: 'getAllPost',
    get: async () => {
        const posts = await PostService.getAll();

        return posts;
    }
});