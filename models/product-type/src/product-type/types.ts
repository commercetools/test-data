import { ProductType, ProductTypeDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TAttributeDefinitionGraphql,
  TAttributeDefinitionDraftGraphql,
} from '../attribute-definition';

export type TProductType = ProductType;

export type TProductTypeGraphql = TProductType & {
  __typename: 'ProductTypeDefinition';
  attributeDefinitions: {
    results: Array<TAttributeDefinitionGraphql>;
    __typename: 'AttributeDefinitionResult';
  };
};

export type TProductTypeDraft = ProductTypeDraft;

export type TProductTypeDraftGraphql = Omit<TProductTypeDraft, 'attributes'> & {
  attributeDefinitions: Array<TAttributeDefinitionDraftGraphql>;
};

export type TProductTypeBuilder = TBuilder<TProductType>;

export type TProductTypeDraftBuilder = TBuilder<TProductTypeDraft>;

export type TCreateProductTypeBuilder = () => TProductTypeBuilder;

export type TCreateProductTypeDraftBuilder = () => TProductTypeDraftBuilder;
