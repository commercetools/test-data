import type { Type, TypeDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TType = Type;
export type TTypeDraft = TypeDraft;

export type TTypeGraphql = TType & {
  __typename: 'Type';
};
export type TTypeDraftGraphql = TTypeDraft;

export type TTypeBuilder = TBuilder<TType>;
export type TTypeDraftBuilder = TBuilder<TTypeDraft>;
export type TCreateTypeBuilder = () => TTypeBuilder;
export type TCreateTypeDraftBuilder = () => TTypeDraftBuilder;
