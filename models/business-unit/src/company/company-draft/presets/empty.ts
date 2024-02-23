import type { TCompanyDraftBuilder } from '../../types';
import CompanyDraft from '../builder';

const empty = (): TCompanyDraftBuilder =>
  CompanyDraft()
    .status(undefined)
    .stores(undefined)
    .storeMode(undefined)
    .contactEmail(undefined)
    .associateMode(undefined)
    .associates(undefined)
    .addresses(undefined)
    .shippingAddresses(undefined)
    .defaultShippingAddress(undefined)
    .billingAddresses(undefined)
    .defaultBillingAddress(undefined)
    .custom(undefined);

export default empty;
