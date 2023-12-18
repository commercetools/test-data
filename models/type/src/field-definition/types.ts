import { FieldDefinition } from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TFieldDefinition = FieldDefinition;

export type TFieldDefinitionDraft = FieldDefinition;

export type TFieldDefinitionGraphql = TFieldDefinition & {
  __typename: 'FieldDefinition';
};

export type TFieldDefinitionDraftGraphql = Omit<
  TFieldDefinitionDraft,
  'label' | 'inputHint'
> & {
  label: TLocalizedStringGraphql;
  inputHint?: TLocalizedStringGraphql | null;
};

export type TFieldDefinitionBuilder = TBuilder<TFieldDefinition>;

export type TFieldDefinitionDraftBuilder = TBuilder<TFieldDefinitionDraft>;

export type TCreateFieldDefinitionBuilder = () => TFieldDefinitionBuilder;

export type TCreateFieldDefinitionDraftBuilder =
  () => TFieldDefinitionDraftBuilder;
