import { FieldDefinition } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpFieldDefinition, TCtpFieldDefinitionInput } from '@/graphql-types';

export type TFieldDefinition = FieldDefinition;

export type TFieldDefinitionDraft = FieldDefinition;

export type TFieldDefinitionGraphql = TCtpFieldDefinition;

export type TFieldDefinitionDraftGraphql = TCtpFieldDefinitionInput;

export type TFieldDefinitionBuilder = TBuilder<TFieldDefinition>;

export type TFieldDefinitionDraftBuilder = TBuilder<TFieldDefinitionDraft>;

export type TCreateFieldDefinitionBuilder = () => TFieldDefinitionBuilder;

export type TCreateFieldDefinitionDraftBuilder =
  () => TFieldDefinitionDraftBuilder;
