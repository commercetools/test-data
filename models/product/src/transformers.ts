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

      // TODO: doesn't exist on REST
      // How should it be handled/built for graphql?
      const skus: Array<String> = ['foo'];

      return {
        productTypeRef,
        stateRef,
        taxCategoryRef,
        skus,
        __typename: 'Product',
      };
    },
  }),
};

export default transformers;
