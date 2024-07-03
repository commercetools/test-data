import {
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import {
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeDefinition = AttributeDefinition;

export type TAttributeDefinitionDraft = AttributeDefinitionDraft;

export type TAttributeDefinitionGraphql = TAttributeDefinition & {
  labelAllLocales: TLocalizedStringGraphql | null;
  __typename: 'AttributeDefinition';
};

export type TAttributeDefinitionDraftGraphql = Omit<
  TAttributeDefinitionDraft,
  'label' | 'inputTip'
> & {
  label: TLocalizedStringDraftGraphql;
  inputTip?: TLocalizedStringDraftGraphql | null;
};

export type TAttributeDefinitionBuilder = TBuilder<TAttributeDefinition>;

export type TAttributeDefinitionDraftBuilder =
  TBuilder<TAttributeDefinitionDraft>;

export type TCreateAttributeDefinitionBuilder =
  () => TAttributeDefinitionBuilder;

export type TCreateAttributeDefinitionDraftBuilder =
  () => TAttributeDefinitionDraftBuilder;
