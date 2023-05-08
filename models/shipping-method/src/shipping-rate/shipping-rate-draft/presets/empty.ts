import type { TShippingRateDraftBuilder } from '../../types';
import ShippingRateDraft from '../builder';

const empty = (): TShippingRateDraftBuilder =>
  ShippingRateDraft().freeAbove(undefined).tiers(undefined);

export default empty;
