import { CreateActionCreator } from '../helpers';
import { TOURNAMENTS } from '../configs/types';

export const fetchTournaments = query => CreateActionCreator.read({
    path: `/search?q=${query}&index=tournament`,
    type: TOURNAMENTS,
});