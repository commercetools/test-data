import { Transformer } from '@commercetools-test-data/core';
import type { TInitiator, TInitiatorGraphql } from './types';

const transformers = {
  rest: Transformer<TInitiator, TInitiator>('rest', {}),
  graphql: Transformer<TInitiator, TInitiatorGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Initiator',
    }),
  }),
};

export default transformers;
