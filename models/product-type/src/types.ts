import {
  ProductType,
  ProductTypeDraft,
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

// attempting to consolidate types to stick with just base and graphql
export type TProductType = ProductType & {
  attributeDefinitions: {
    results: Array<AttributeDefinition>;
    __typename: 'AttributeDefinitionResult';
  };
};

export type TProductTypeGraphql = Omit<TProductType, 'attributes'> & {
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

export type TProductTypeBuilder = TBuilder<TProductType>;

export type TProductTypeDraftBuilder = TBuilder<TProductTypeDraftDefault>;

export type TCreateProductTypeBuilder = () => TProductTypeBuilder;

export type TCreateProductTypeDraftBuilder = () => TProductTypeDraftBuilder;
