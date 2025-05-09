import KeyReference from '../builder';
import type { TKeyReferenceBuilder } from '../types';

const channel = (): TKeyReferenceBuilder => KeyReference().typeId('channel');

export default channel;
