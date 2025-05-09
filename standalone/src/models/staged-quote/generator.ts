import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '../../core';
import { createRelatedDates } from '../../utils';
import { Company } from '../business-unit';
import { Cart } from '../cart';
import { ClientLogging } from '../commons';
import { Customer } from '../customer';
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
