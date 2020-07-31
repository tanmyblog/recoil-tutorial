import { selector, selectorFamily } from 'recoil';

import PostService from '../../services/PostService';

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