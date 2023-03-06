import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TProduct, TProductRest, TProductGraphql } from './types';

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
  rest: Transformer<TProduct, TProductRest>('rest', {
    buildFields: ['masterData', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => {
      return {
        ...fields,
        productType: Reference.random().typeId('product-type').buildRest(),
        taxCategory: Reference.random().typeId('tax-category').buildRest(),
        // TODO: transform from field when state model is available
        state: fields.state
          ? Reference.random().id(fields.state.id).typeId('state').buildRest()
          : undefined,
      };
    },
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
        .typeId('tax-category')
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
