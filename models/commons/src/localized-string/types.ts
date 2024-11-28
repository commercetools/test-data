import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpLocalizedString } from '@commercetools-test-data/graphql-types';

export type TLocalizedString = {
  [locale: string]: string | undefined;
};
export type TLocalizedStringGraphql = TCtpLocalizedString[];

export type TLocalizedStringBuilder = TBuilder<TLocalizedString>;
export type TCreateLocalizedStringBuilder = () => TLocalizedStringBuilder;

export type TLocalizedStringDraft = TLocalizedString;

export type TLocalizedStringDraftGraphql = Omit<
  TLocalizedStringGraphql,
  '__typename'
>[];

export type TLocalizedStringDraftBuilder = TBuilder<TLocalizedStringDraft>;
export type TCreateLocalizedStringDraftBuilder =
  () => TLocalizedStringDraftBuilder;
