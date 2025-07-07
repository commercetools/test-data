import { sequence, fake, Generator, oneOf } from '@/core';
import { Company } from '@/models/business-unit';
import { LineItem } from '@/models/cart/cart';
import {
  CentPrecisionMoney,
  ClientLogging,
  Address,
  Reference,
} from '@/models/commons';
import { Customer } from '@/models/customer/customer';
import { CustomerGroup } from '@/models/customer/customer-group';
import { Store } from '@/models/store';
import { createRelatedDates } from '@/utils';
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
    customer: fake(() => Customer.random()),
    customerGroup: fake(() => CustomerGroup.random()),
    store: fake(() => Store.random()),
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
    cart: fake(() => Reference.random().typeId('cart')),
    businessUnit: fake(() => Company.random()),
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
    priceRoundingMode: oneOf(...Object.values(TAX_ROUNDING_MODE)),
  },
});

export default generator;
