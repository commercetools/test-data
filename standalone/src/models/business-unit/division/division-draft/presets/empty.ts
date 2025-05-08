import type { TDivisionDraftBuilder } from '../../types';
import DivisionDraft from '../builder';

const empty = (): TDivisionDraftBuilder =>
  DivisionDraft()
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
