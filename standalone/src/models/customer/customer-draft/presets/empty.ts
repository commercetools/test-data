import type { TCustomerDraftBuilder } from '../../types';
import CustomerDraft from '../builder';

const empty = (): TCustomerDraftBuilder =>
  CustomerDraft()
    .customerNumber(undefined)
    .key(undefined)
    .password(undefined)
    .stores(undefined)
    .firstName(undefined)
    .lastName(undefined)
    .middleName(undefined)
    .title(undefined)
    .salutation(undefined)
    .anonymousCart(undefined)
    .anonymousId(undefined)
    .externalId(undefined)
    .dateOfBirth(undefined)
    .companyName(undefined)
    .vatId(undefined)
    .isEmailVerified(undefined)
    .customerGroup(undefined)
    .addresses(undefined)
    .defaultBillingAddress(undefined)
    .billingAddresses(undefined)
    .defaultShippingAddress(undefined)
    .shippingAddresses(undefined)
    .custom(undefined)
    .locale(undefined)
    .authenticationMode(undefined);

export default empty;
