import type { Type, TypeDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpTypeDefinition,
  TCtpTypeDefinitionDraft,
} from '@commercetools-test-data/graphql-types';

export type TType = Type;
export type TTypeDraft = TypeDraft;

export type TTypeGraphql = TCtpTypeDefinition;
export type TTypeDraftGraphql = TCtpTypeDefinitionDraft;

export type TTypeBuilder = TBuilder<TType>;
export type TTypeDraftBuilder = TBuilder<TTypeDraft>;
export type TCreateTypeBuilder = () => TTypeBuilder;
export type TCreateTypeDraftBuilder = () => TTypeDraftBuilder;
