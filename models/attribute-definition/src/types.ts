import {
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeDefinition = AttributeDefinition;

export type TAttributeDefinitionDraft = AttributeDefinitionDraft;

export type TAttributeDefinitionGraphql = TAttributeDefinition & {
  __typename: TAttributeDefinition['name'];
};

export type TAttributeDefinitionDraftGraphql = TAttributeDefinitionDraft & {
  __typename: TAttributeDefinitionDraft['name'];
};

export type TAttributeDefinitionBuilder = TBuilder<TAttributeDefinition>;

export type TAttributeDefinitionDraftBuilder =
  TBuilder<TAttributeDefinitionDraft>;

export type TCreateAttributeDefinitionBuilder =
  () => TAttributeDefinitionBuilder;

export type TCreateAttributeDefinitionDraftBuilder =
  () => TAttributeDefinitionDraftBuilder;
