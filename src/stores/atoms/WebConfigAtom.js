import { atom, selector } from 'recoil';

export const WebConfigState = atom({
    key: 'darkMode',
    default: false,
});