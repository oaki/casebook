import {atom} from 'jotai';


interface OrganHighlightState {
    hover: string[];
    position: string;
}

export const organHighlightAtom = atom<OrganHighlightState>({
    hover: [],
    position: '0px'
});
