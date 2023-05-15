import {
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeDefinition = AttributeDefinition;

export type TAttributeDefinitionDraft = AttributeDefinitionDraft;

export type TAttributeDefinitionGraphql = TAttributeDefinition & {
  __typename: 'AttributeDefinition';
};

export type TAttributeDefinitionDraftGraphql = Omit<
  TAttributeDefinitionDraft,
  'label'
> & {
  label: TLocalizedStringGraphql;
};

export type TAttributeDefinitionBuilder = TBuilder<TAttributeDefinition>;

export type TAttributeDefinitionDraftBuilder =
  TBuilder<TAttributeDefinitionDraft>;

export type TCreateAttributeDefinitionBuilder =
  () => TAttributeDefinitionBuilder;

export type TCreateAttributeDefinitionDraftBuilder =
  () => TAttributeDefinitionDraftBuilder;
