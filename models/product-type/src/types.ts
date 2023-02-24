import {
  ProductType,
  ProductTypeDraft,
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductType = ProductType & {
  attributeDefinitions: {
    results: Array<AttributeDefinition>;
    __typename: 'AttributeDefinitionResult';
  };
};

export type TProductTypeGraphql = Omit<TProductType, 'attributes'> & {
  __typename: 'ProductTypeDefinition';
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
