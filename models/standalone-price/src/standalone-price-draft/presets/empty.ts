import type { TStandalonePriceDraftBuilder } from '../../types';
import StandalonePriceDraft from '../builder';

const empty = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft()
    .country(undefined)
    .customerGroup(undefined)
    .channel(undefined)
    .validFrom(undefined)
    .validUntil(undefined)
    .tiers(undefined)
    .discounted(undefined)
    .staged(undefined)
    .active(undefined)
    .custom(undefined);

export default empty;
