import type { TDiscountCodeDraftBuilder } from '../../types';
import DiscountCode from '../builder';

const empty = (): TDiscountCodeDraftBuilder =>
  DiscountCode()
    .key(undefined)
    .cartPredicate(undefined)
    .custom(undefined)
    .description(undefined)
    .groups(undefined)
    .isActive(undefined)
    .maxApplications(undefined)
    .maxApplicationsPerCustomer(undefined)
    .name(undefined)
    .validFrom(undefined)
    .validUntil(undefined);

export default empty;
