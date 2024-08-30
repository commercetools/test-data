import { buildField, Transformer } from '@commercetools-test-data/core';
import { faker } from '@faker-js/faker';
import * as Reference from '../reference';
import { TReference } from '../reference/types';
import type { TClientLogging, TClientLoggingGraphql } from './types';

const transformers = {
  default: Transformer<TClientLogging, TClientLogging>('default', {
    buildFields: ['customer'],
  }),
  rest: Transformer<TClientLogging, TClientLogging>('rest', {
    buildFields: ['customer'],
  }),
  graphql: Transformer<TClientLogging, TClientLoggingGraphql>('graphql', {
    buildFields: [],
    replaceFields: ({ fields }) => {
      const customerRef = buildField(
        fields.customer,
        'graphql'
      ) as TReference<'customer'>;
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
