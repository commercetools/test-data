import {
  ProductType,
  ProductTypeDraft,
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

// Default representation
export type TProductTypeDefault = ProductType & {
  attributeDefinitions: {
    results: Array<AttributeDefinition>;
    __typename: 'AttributeDefinitionResult';
  };
};

// Build REST and GraphQL representations from Default
export type TProductType = Omit<TProductTypeDefault, 'attributeDefinitions'>;

export type TProductTypeGraphql = Omit<TProductTypeDefault, 'attributes'> & {
  __typename: 'ProductTypeDefinition';
};

// Draft Default
export type TProductTypeDraftDefault = ProductTypeDraft & {
  attributeDefinitions: Array<AttributeDefinitionDraft>;
};

// Build REST and GraphQL from Default
export type TProductTypeDraft = Omit<ProductTypeDraft, 'attributeDefinitions'>;

export type TProductTypeDraftGraphql = Omit<TProductTypeDraft, 'attributes'> & {
  __typename: 'ProductTypeDraft';
};

export type TProductTypeBuilder = TBuilder<TProductTypeDefault>;

export type TProductTypeDraftBuilder = TBuilder<TProductTypeDraftDefault>;

export type TCreateProductTypeBuilder = () => TProductTypeBuilder;

export type TCreateProductTypeDraftBuilder = () => TProductTypeDraftBuilder;
