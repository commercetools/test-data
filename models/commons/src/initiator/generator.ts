import type { TInitiator } from './types';
import Reference from '../reference';
import { Generator, fake } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/types#client-logging
const generator = Generator<TInitiator>({
  fields: {
    isPlatformClient: fake((f) => f.random.boolean()),
    externalUserId: fake((f) => f.random.uuid()),
    anonymousId: fake((f) => f.random.uuid()),
    clientId: fake((f) => f.random.uuid()),
    customerRef: Reference.random().typeId('customer').build(),
    userRef: Reference.random().typeId('user').build(),
  },
});

export default generator;
