import {
  AttributeDefinition,
  AttributeDefinitionDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@/models/commons';

export type TAttributeDefinition = AttributeDefinition;

export type TAttributeDefinitionDraft = AttributeDefinitionDraft;

export type TAttributeDefinitionGraphql = Omit<
  TAttributeDefinition,
  'label' | 'inputTip'
> & {
  label: string;
  labelAllLocales: TLocalizedStringGraphql | null;
  inputTip: string;
  inputTipAllLocales: TLocalizedStringGraphql | null;
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
