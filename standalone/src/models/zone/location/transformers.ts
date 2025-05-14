import { Transformer } from '@/core';
import { TLocation, TLocationGraphql } from './types';

const transformers = {
  default: Transformer<TLocation, TLocation>('default', { buildFields: [] }),

  rest: Transformer<TLocation, TLocation>('rest', { buildFields: [] }),
  graphql: Transformer<TLocation, TLocationGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'Location',
    }),
  }),
};

export default transformers;
