import { Cart } from '@commercetools-test-data/cart';
import {
  ClientLogging,
  KeyReference,
  Reference,
} from '@commercetools-test-data/commons';
import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '@commercetools-test-data/core';
import { Customer } from '@commercetools-test-data/customer';
import { QuoteRequest } from '@commercetools-test-data/quote-request';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { STAGED_QUOTE_STATE } from './constants';
import type { TStagedQuote } from './types';

const [getOlderDate, getNewerDate, getFutureDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/staged-quotes#stagedquote

const generator = Generator<TStagedQuote>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    stagedQuoteState: oneOf(...Object.values(STAGED_QUOTE_STATE)),
    customer: fake(() =>
      Reference.presets.customerReference().obj(Customer.random())
    ),
    quoteRequest: fake(() =>
      Reference.presets.quoteRequestReference().obj(QuoteRequest.random())
    ),
    quotationCart: fake(() =>
      Reference.presets.cartReference().obj(Cart.random())
    ),
    validTo: fake(getFutureDate),
    sellerComment: fake((f) => f.lorem.words(5)),
    state: null,
    purchaseOrderNumber: null,
    businessUnit: fake(() => KeyReference.presets.businessUnit()),
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
