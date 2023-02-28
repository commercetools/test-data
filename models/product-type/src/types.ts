import { TAttributeDefinitionGraphql } from '@commercetools-test-data/attribute-definition';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  ProductType,
  ProductTypeDraft,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';

export type TProductType = ProductType;

export type TProductTypeGraphql = Omit<TProductType, 'attributes'> & {
  __typename: 'ProductTypeDefinition';
  attributeDefinitions: {
    results: Array<TAttributeDefinitionGraphql>;
    __typename: 'AttributeDefinitionResult';
  };
};

export type TProductTypeDraft = ProductTypeDraft & {
  attributeDefinitions: Array<AttributeDefinitionDraft>;
};

export type TProductTypeDraftGraphql = TProductTypeDraft & {
  __typename: 'ProductTypeDraft';
};

export type TProductTypeBuilder = TBuilder<TProductType>;

export type TProductTypeDraftBuilder = TBuilder<TProductTypeDraft>;

export type TCreateProductTypeBuilder = () => TProductTypeBuilder;

export type TCreateProductTypeDraftBuilder = () => TProductTypeDraftBuilder;
