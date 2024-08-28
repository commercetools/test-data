import Image from '../builder';
import type { TImageBuilder } from '../types';

const empty = (): TImageBuilder => Image().label(undefined);

export default empty;
