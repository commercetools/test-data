import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TProduct, TProductGraphql } from './types';

const transformers = {
  default: Transformer<TProduct, TProduct>('default', {
    buildFields: [
      'productType',
      'masterData',
      'taxCategory',
      'state',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TProduct, TProduct>('rest', {
    removeFields: ['skus'],
    buildFields: [
      'productType',
      'masterData',
      'taxCategory',
      'state',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  graphql: Transformer<TProduct, TProductGraphql>('graphql', {
    buildFields: [
      'productType',
      'masterData',
      'taxCategory',
      'state',
      'createdBy',
      'lastModifiedBy',
    ],
    addFields: ({ fields }) => {
      const productTypeRef: TReferenceGraphql = Reference.random()
        .id(fields.productType.id)
        .typeId('product-type')
        .buildGraphql();

      const stateRef: TReferenceGraphql = Reference.random()
        .id(fields.productType.id)
        .typeId('state')
        .buildGraphql();

      const taxCategoryRef: TReferenceGraphql = Reference.random()
        .id(fields.productType.id)
        .typeId('product-type')
        .buildGraphql();

      return {
        productTypeRef,
        stateRef,
        taxCategoryRef,
        __typename: 'Product',
      };
    },
  }),
};

export default transformers;