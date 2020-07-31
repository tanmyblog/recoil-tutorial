import { atom } from 'recoil';

export const ProductState = atom({
    key: 'products',
    default: [
        { id: '1', name: 'Sơ mi nam', price: 10000 },
        { id: '2', name: 'Sơ mi nữ', price: 13000 },
    ],
}); 