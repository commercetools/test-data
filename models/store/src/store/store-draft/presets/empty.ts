import type { TStoreDraftBuilder } from '../../types';
import StoreDraft from '../builder';

const empty = (): TStoreDraftBuilder =>
  StoreDraft()
    .name(undefined)
    .languages(undefined)
    .countries(undefined)
    .distributionChannels(undefined)
    .supplyChannels(undefined)
    .productSelections(undefined)
    .custom(undefined);

export default empty;
