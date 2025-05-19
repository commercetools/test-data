import type { TCartDiscountDraftBuilder } from '../../types';
import CartDiscountDraft from '../builder';

const empty = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft()
    .key(undefined)
    .description(undefined)
    .target(undefined)
    .isActive(undefined)
    .validFrom(undefined)
    .validUntil(undefined)
    .requiresDiscountCode(undefined)
    .stackingMode(undefined)
    .custom(undefined);

export default empty;
