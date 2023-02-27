import { Transformer } from '@commercetools-test-data/core';
import type { TAddressDraft, TAddressDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TAddressDraft, TAddressDraft>('default', {}),
  rest: Transformer<TAddressDraft, TAddressDraft>('rest', {}),
  graphql: Transformer<TAddressDraft, TAddressDraftGraphql>('graphql', {
    addFields: () => ({
      __typename: 'AddressInput',
    }),
  }),
};

export default transformers;
