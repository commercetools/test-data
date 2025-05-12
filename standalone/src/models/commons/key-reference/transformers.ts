import { Transformer } from '../../../core';
import type { TKeyReference, TKeyReferenceGraphql } from './types';

const transformers = {
  default: Transformer<TKeyReference, TKeyReference>('default', {}),
  rest: Transformer<TKeyReference, TKeyReference>('rest', {}),
  graphql: Transformer<TKeyReference, TKeyReferenceGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Reference',
    }),
  }),
};

export default transformers;
