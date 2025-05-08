import { Transformer } from '../../../../core';
import type { TProjectExpiry, TProjectExpiryGraphql } from './types';

const transformers = {
  default: Transformer<TProjectExpiry, TProjectExpiry>('default', {}),
  rest: Transformer<TProjectExpiry, TProjectExpiry>('rest', {}),
  graphql: Transformer<TProjectExpiry, TProjectExpiryGraphql>('graphql', {
    addFields: () => ({
      __typename: 'ProjectExpiry',
    }),
  }),
};

export default transformers;
