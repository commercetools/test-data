import { Company } from '@commercetools-test-data/business-unit';
import { LineItem } from '@commercetools-test-data/cart';
import {
  CentPrecisionMoney,
  ClientLogging,
  Address,
} from '@commercetools-test-data/commons';
import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '@commercetools-test-data/core';
import { Customer } from '@commercetools-test-data/customer';
import { CustomerGroup } from '@commercetools-test-data/customer-group';
import { QuoteRequest } from '@commercetools-test-data/quote-request';
import { StagedQuote } from '@commercetools-test-data/staged-quote';
import { Store } from '@commercetools-test-data/store';
import { createRelatedDates } from '@commercetools-test-data/utils';
import {
  QUOTE_STATE,
  INVENTORY_MODE,
  TAX_MODE,
  TAX_ROUNDING_MODE,
  TAX_CALCULATION_MODE,
} from './constants';
import type { TQuote } from './types';

const [getOlderDate, getNewerDate, getFutureDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/quotes

const generator = Generator<TQuote>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    quoteRequest: fake(() => QuoteRequest.random()),
    stagedQuote: fake(() => StagedQuote.random()),
    customer: fake(() => Customer.random()),
    customerGroup: fake(() => CustomerGroup.random()),
    validTo: fake(getFutureDate),
    sellerComment: fake((f) => f.lorem.words(5)),
    buyerComment: fake((f) => f.lorem.words(5)),
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
    quoteState: oneOf(...Object.values(QUOTE_STATE)),
    state: null,
    purchaseOrderNumber: null,
    businessUnit: fake(() => Company.random()),
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
