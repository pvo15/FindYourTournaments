import { createReducer } from '../helpers';
import {
  TOURNAMENTS,
} from '../configs/types';

export const tournament = createReducer(TOURNAMENTS);
