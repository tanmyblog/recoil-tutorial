import { atom } from 'recoil';

export const PostState = atom({
    key: 'posts',
    default: [],
});