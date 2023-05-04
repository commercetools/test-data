import { ProductType, ProductTypeDraft } from '@commercetools/platform-sdk';
import {
  TAttributeDefinitionGraphql,
  TAttributeDefinitionDraftGraphql,
} from '@commercetools-test-data/attribute-definition';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductType = ProductType;

export type TProductTypeGraphql = TProductType & {
  __typename: 'ProductTypeDefinition';
  attributeDefinitions: {
    results: Array<TAttributeDefinitionGraphql>;
    __typename: 'AttributeDefinitionResult';
  };
};

export type TProductTypeDraft = ProductTypeDraft;

export type TProductTypeDraftGraphql = TProductTypeDraft & {
  __typename: 'ProductTypeDraft';
  attributeDefinitions: Array<TAttributeDefinitionDraftGraphql>;
};

export type TProductTypeBuilder = TBuilder<TProductType>;

export type TProductTypeDraftBuilder = TBuilder<TProductTypeDraft>;

export type TCreateProductTypeBuilder = () => TProductTypeBuilder;

export type TCreateProductTypeDraftBuilder = () => TProductTypeDraftBuilder;
