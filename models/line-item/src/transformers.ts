import {
  LocalizedString,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TLineItem, TLineItemGraphql, TLineItemRest } from './types';

const transformers = {
  default: Transformer<TLineItem, TLineItem>('default', {
    buildFields: [
      'name',
      'productSlug',
      'productType',
      'variant',
      'price',
      'totalPrice',
      'taxRate',
      'supplyChannel',
      'distributionChannel',
    ],
  }),
  rest: Transformer<TLineItem, TLineItemRest>('rest', {
    buildFields: [
      'name',
      'productSlug',
      'productType',
      'variant',
      'price',
      'totalPrice',
      'taxRate',
      'supplyChannel',
      'distributionChannel',
    ],
    replaceFields: ({ fields }) => ({
      ...fields,
      supplyChannel: {
        typeId: 'channel',
        id: fields.supplyChannel.id,
        key: fields.supplyChannel.key,
      },
      distributionChannel: {
        typeId: 'channel',
        id: fields.supplyChannel.id,
        key: fields.supplyChannel.key,
      },
    }),
  }),
  graphql: Transformer<TLineItem, TLineItemGraphql>('graphql', {
    buildFields: [
      'name',
      'productSlug',
      'productType',
      'variant',
      'price',
      'totalPrice',
      'taxRate',
      'supplyChannel',
      'distributionChannel',
    ],
    addFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const productSlugAllLocales = LocalizedString.toLocalizedField(
        fields.productSlug
      );
      const supplyChannelRef: TReferenceGraphql = {
        id: fields.supplyChannel.id,
        typeId: 'channel',
        __typename: 'Reference',
      };
      const distributionChannelRef: TReferenceGraphql = {
        id: fields.distributionChannel.id,
        typeId: 'channel',
        __typename: 'Reference',
      };
      const productTypeRef: TReferenceGraphql = {
        id: fields.productType.id,
        typeId: 'product-type',
        __typename: 'Reference',
      };

      return {
        nameAllLocales,
        productSlugAllLocales,
        supplyChannelRef,
        distributionChannelRef,
        productTypeRef,
        __typename: 'LineItem',
      };
    },
  }),
};

export default transformers;
