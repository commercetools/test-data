import { TPriceDraftBuilder } from '../../types';
import PriceDraft from '../builder';

const empty = (): TPriceDraftBuilder =>
  PriceDraft()
    .key(undefined)
    .country(undefined)
    .customerGroup(undefined)
    .channel(undefined)
    .validFrom(undefined)
    .validUntil(undefined)
    .tiers(undefined)
    .discounted(undefined)
    .custom(undefined)
    .recurrencePolicyRef(undefined);

export default empty;
