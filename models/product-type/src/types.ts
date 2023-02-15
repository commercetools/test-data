import {
  ProductType,
  ProductTypeDraft,
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductType = ProductType;

export type TProductTypeDraft = ProductTypeDraft;

export type TProductTypeGraphql = Omit<TProductType, 'attributes'> & {
  attributeDefinitions: {
    results: Array<AttributeDefinition>;
    __typename: 'AttributeDefinitionResult';
  };
  __typename: 'ProductTypeDefinition';
};

export type TProductTypeDraftGraphql = Omit<TProductTypeDraft, 'attributes'> & {
  attributeDefinitions: Array<AttributeDefinitionDraft>;
  __typename: 'ProductTypeDraft';
};

export type TProductTypeBuilder = TBuilder<TProductType>;

export type TProductTypeDraftBuilder = TBuilder<TProductTypeDraft>;

export type TCreateProductTypeBuilder = () => TProductTypeBuilder;

export type TCreateProductTypeDraftBuilder = () => TProductTypeDraftBuilder;
