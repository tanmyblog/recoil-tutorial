import { selector, selectorFamily } from 'recoil';

import PostService from '../../services/PostService';
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

export const getById = selectorFamily({
    key: 'getPostById',
    get: (id) => async () => {
        const post = await PostService.getById(id);
        return post;
    }
});