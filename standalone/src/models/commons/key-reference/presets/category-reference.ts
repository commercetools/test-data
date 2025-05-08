import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const category = (): TKeyReferenceBuilder => KeyReference().typeId('category');

export default category;
