import { selector } from 'recoil';

import { WebConfigState } from '../atoms/WebConfigAtom';

export const setToggleDarkMode = selector({
    key: 'toggleDarkMode',
    set: ({ get, set }) => {
        const curState = get(WebConfigState);

        set(WebConfigState, !curState);
    }
});