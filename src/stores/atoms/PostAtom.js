import { atom } from 'recoil';

const PostState = atom({
    key: 'posts',
    default: [],
});

export default PostState;