import type { TCartDraftBuilder } from '../../../types';
import CartDraft from '../builder';

const empty = (): TCartDraftBuilder =>
  CartDraft()
    .key(undefined)
    .customerId(undefined)
    .customerEmail(undefined)
    .customerGroup(undefined)
    .anonymousId(undefined)
    .businessUnit(undefined)
    .store(undefined)
    .lineItems(undefined)
    .customLineItems(undefined)
    .taxMode(undefined)
    .externalTaxRateForShippingMethod(undefined)
    .taxRoundingMode(undefined)
    .taxCalculationMode(undefined)
    .inventoryMode(undefined)
    .billingAddress(undefined)
    .shippingAddress(undefined)
    .shippingMethod(undefined)
    .shippingRateInput(undefined)
    .shippingMode(undefined)
    .customShipping(undefined)
    .shipping(undefined)
    .itemShippingAddresses(undefined)
    .discountCodes(undefined)
    .country(undefined)
    .locale(undefined)
    .origin(undefined)
    .deleteDaysAfterLastModification(undefined)
    .custom(undefined);

export default empty;
