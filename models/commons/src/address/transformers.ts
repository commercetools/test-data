import { Transformer } from '@commercetools-test-data/core';
import type { TAddress, TAddressGraphql } from './types';

const transformers = {
  default: Transformer<TAddress, TAddress>('default', {}),
  rest: Transformer<TAddress, TAddress>('rest', {}),
  graphql: Transformer<TAddress, TAddressGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Address',
    }),
  }),
};

export default transformers;
