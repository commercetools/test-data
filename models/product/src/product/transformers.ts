import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';
import {
  ProductType,
  TProductTypeGraphql,
} from '@commercetools-test-data/product-type';
import { TStateGraphql, State } from '@commercetools-test-data/state';
import {
  TaxCategory,
  TTaxCategoryGraphql,
} from '@commercetools-test-data/tax-category';
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
    buildFields: ['masterData', 'state', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => {
      const restProductType = buildField(fields.productType, 'rest');
      const productType = ProductType.random()
        .id(restProductType.id)
        .key(restProductType.obj!.key)
        .name(restProductType.obj!.name)
        .description(restProductType.obj!.description)
        .buildGraphql<TProductTypeGraphql>();
      const productTypeRef = Reference.random()
        .id(restProductType.id)
        .typeId('product-type')
        .buildGraphql<TReferenceGraphql>();

      let state: TStateGraphql | undefined;
      let stateRef: TReferenceGraphql | undefined;
      let taxCategory: TTaxCategoryGraphql | undefined;
      let taxCategoryRef: TReferenceGraphql | undefined;

      if (fields.state) {
        const restStateRef = buildField(fields.state, 'rest');
        stateRef = Reference.presets
          .stateReference()
          .id(restStateRef.id)
          .buildGraphql<TReferenceGraphql>();
        state = State.random()
          .id(restStateRef.id)
          .key(restStateRef.obj!.key)
          .name(restStateRef.obj!.name)
          .buildGraphql<TStateGraphql>();
      }

      if (fields.taxCategory) {
        const restTaxCategoryRef = buildField(fields.taxCategory, 'rest');
        taxCategoryRef = Reference.presets
          .taxCategoryReference()
          .id(restTaxCategoryRef.id)
          .buildGraphql<TReferenceGraphql>();
        taxCategory = TaxCategory.random()
          .id(restTaxCategoryRef.id)
          .key(restTaxCategoryRef.obj!.key)
          .name(restTaxCategoryRef.obj!.name)
          .description(restTaxCategoryRef.obj!.description)
          .buildGraphql<TTaxCategoryGraphql>();
      }

      return {
        ...fields,
        productType,
        productTypeRef,
        state,
        stateRef,
        taxCategory,
        taxCategoryRef,
        __typename: 'Product',
      };
    },
  }),
};

export default transformers;
