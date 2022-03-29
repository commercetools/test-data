import faker from '@faker-js/faker';
import { Transformer } from '@commercetools-test-data/core';
import type { TClientLogging, TClientLoggingGraphql } from './types';
import * as Reference from '../reference';
import { TReference } from '../reference/types';

const transformers = {
  default: Transformer<TClientLogging, TClientLogging>('default', {
    buildFields: ['customer'],
  }),
  rest: Transformer<TClientLogging, TClientLogging>('rest', {
    buildFields: ['customer'],
  }),
  graphql: Transformer<TClientLogging, TClientLoggingGraphql>('graphql', {
    replaceFields: ({ fields }) => {
      const customerRef = Reference.random()
        .typeId('customer')
        .buildGraphql<TReference<'customer'>>();
      const userRef = Reference.random()
        .typeId('user')
        .buildGraphql<TReference<'user'>>();
      return {
        __typename: 'Initiator',
        isPlatformClient: faker.datatype.boolean(),
        externalUserId: fields.externalUserId,
        anonymousId: fields.anonymousId,
        clientId: fields.clientId,
        customerRef,
        userRef,
      };
    },
  }),
};

export default transformers;
