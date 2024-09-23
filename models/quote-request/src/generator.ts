import { Cart, LineItem } from '@commercetools-test-data/cart';
import {
  CentPrecisionMoney,
  ClientLogging,
  Address,
  Reference,
  KeyReference,
} from '@commercetools-test-data/commons';
import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '@commercetools-test-data/core';
import { Customer } from '@commercetools-test-data/customer';
import { CustomerGroup } from '@commercetools-test-data/customer-group';
import { createRelatedDates } from '@commercetools-test-data/utils';
import {
  QUOTE_REQUEST_STATE,
  INVENTORY_MODE,
  TAX_MODE,
  TAX_ROUNDING_MODE,
  TAX_CALCULATION_MODE,
} from './constants';
import type { TQuoteRequest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/quote-requests#quoterequest

const generator = Generator<TQuoteRequest>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    quoteRequestState: oneOf(...Object.values(QUOTE_REQUEST_STATE)),
    comment: null,
    customer: fake(() =>
      Reference.presets.customerReference().obj(Customer.random())
    ),
    customerGroup: fake(() =>
      Reference.presets.customerGroupReference().obj(CustomerGroup.random())
    ),
    store: fake(() => KeyReference.presets.store()),
    lineItems: fake(() => [LineItem.random()]),
    customLineItems: [],
    totalPrice: fake(() => CentPrecisionMoney.random()),
    taxedPrice: null,
    shippingAddress: fake(() => Address.random()),
    billingAddress: fake(() => Address.random()),
    inventoryMode: oneOf(...Object.values(INVENTORY_MODE)),
    taxMode: oneOf(...Object.values(TAX_MODE)),
    taxRoundingMode: oneOf(...Object.values(TAX_ROUNDING_MODE)),
    taxCalculationMode: oneOf(...Object.values(TAX_CALCULATION_MODE)),
    country: fake((f) => f.location.countryCode()),
    shippingInfo: null,
    paymentInfo: null,
    shippingRateInput: null,
    itemShippingAddresses: fake(() => [Address.random()]),
    directDiscounts: [],
    state: null,
    purchaseOrderNumber: null,
    cart: fake(() => Reference.presets.cartReference().obj(Cart.random())),
    businessUnit: fake(
      () => KeyReference.presets.businessUnit()
      // Reference.presets.businessUnitReference().obj(Company.random())
    ),
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
