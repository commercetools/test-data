import Reference from '../../builder';
import type { TReferenceBuilder } from '../../types';

const channelReference = (): TReferenceBuilder => Reference().typeId('channel');

export default channelReference;
