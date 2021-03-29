import type { TInitiator, TInitiatorGraphql } from './types';
import { Transformer } from '@commercetools-test-data/core';

const transformers = {
  graphql: Transformer<TInitiator, TInitiatorGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Initiator',
    }),
  }),
};

export default transformers;
