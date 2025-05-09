import Image from '../builder';
import { TImageBuilder } from '../types';

const empty = (): TImageBuilder => Image().label(undefined);

export default empty;
