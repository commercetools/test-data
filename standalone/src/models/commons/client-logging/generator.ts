import { Generator, fake } from '@/core';
import { Reference } from '../reference';
import type { TClientLogging } from './types';

// https://docs.commercetools.com/api/types#client-logging
const generator = Generator<TClientLogging>({
  fields: {
    externalUserId: fake((f) => f.string.uuid()),
    anonymousId: fake((f) => f.string.uuid()),
    clientId: fake((f) => f.string.uuid()),
    customer: fake(() => Reference.random().typeId('customer')),
  },
});

export default generator;
