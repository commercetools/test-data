import { Generator, fake } from '@commercetools-test-data/core';
import * as Reference from '../reference';
import type { TInitiator } from './types';

// https://docs.commercetools.com/api/types#client-logging
const generator = Generator<TInitiator>({
  fields: {
    isPlatformClient: fake((f) => f.datatype.boolean()),
    externalUserId: fake((f) => f.datatype.uuid()),
    anonymousId: fake((f) => f.datatype.uuid()),
    clientId: fake((f) => f.datatype.uuid()),
    customerRef: Reference.random().typeId('customer').build(),
    userRef: Reference.random().typeId('user').build(),
  },
});

export default generator;
