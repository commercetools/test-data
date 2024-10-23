import { Company } from '@commercetools-test-data/business-unit';
import { Cart } from '@commercetools-test-data/cart';
import { ClientLogging } from '@commercetools-test-data/commons';
import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '@commercetools-test-data/core';
import { Customer } from '@commercetools-test-data/customer';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { QuoteRequest } from '../quote-request';
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
    customer: fake(() => Customer.random()),
    quoteRequest: fake(() => QuoteRequest.random()),
    quotationCart: fake(() => Cart.random()),
    validTo: fake(getFutureDate),
    sellerComment: fake((f) => f.lorem.words(5)),
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
