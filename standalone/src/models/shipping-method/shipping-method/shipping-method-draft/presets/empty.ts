import type { TShippingMethodDraftBuilder } from '../../types';
import ShippingMethodDraft from '../builder';

const empty = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft()
    .key(undefined)
    .localizedName(undefined)
    .localizedDescription(undefined)
    .predicate(undefined)
    .custom(undefined);

export default empty;
