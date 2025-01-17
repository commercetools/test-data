import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductTailoring,
  TProductTailoringRest,
  TProductTailoringGraphql,
} from './types';

const transformers = {
  default: Transformer<TProductTailoring, TProductTailoring>('default', {
    buildFields: ['product', 'store', 'current', 'staged'],
  }),

  rest: Transformer<TProductTailoring, TProductTailoringRest>('rest', {
    buildFields: ['current', 'staged'],
    replaceFields: ({ fields }) => ({
      ...fields,
      product: Reference.random().typeId('product').buildRest(),
      store: Reference.random().typeId('store').buildRest(),
    }),
  }),

  graphql: Transformer<TProductTailoring, TProductTailoringGraphql>('graphql', {
    buildFields: ['current', 'staged'],
    addFields: ({ fields }) => {
      const productRef: TReferenceGraphql = Reference.random()
        .typeId('product')
        .buildGraphql();

      const storeRef: TReferenceGraphql = Reference.random()
        .typeId('store')
        .buildGraphql();

      return {
        productRef,
        storeRef,
        __typename: 'ProductTailoring',
      };
    },
  }),
};

export default transformers;
