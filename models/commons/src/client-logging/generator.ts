import { Generator, fake } from '@commercetools-test-data/core';
import * as Reference from '../reference';
import type { TClientLogging } from './types';

// https://docs.commercetools.com/api/types#client-logging
const generator = Generator<TClientLogging>({
  fields: {
    externalUserId: fake((f) => f.datatype.uuid()),
    anonymousId: fake((f) => f.datatype.uuid()),
    clientId: fake((f) => f.datatype.uuid()),
    customer: fake(() => Reference.random().typeId('customer')),
  },
});

export default generator;
