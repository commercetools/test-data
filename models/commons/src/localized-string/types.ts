import type { TBuilder } from '@commercetools-test-data/core';

export type TLocalizedString = {
  [locale: string]: string | undefined;
} & Partial<Record<'de' | 'en' | 'fr', string>>;
export type TLocalizedStringGraphql = {
  __typename: 'LocalizedString';
  locale: string;
  value: string | undefined;
}[];

export type TLocalizedStringBuilder = TBuilder<TLocalizedString>;
export type TCreateLocalizedStringBuilder = () => TLocalizedStringBuilder;

export type TLocalizedStringDraft = TLocalizedString;

export type TLocalizedStringDraftGraphql = {
  locale: string;
  value: string | undefined;
}[];

export type TLocalizedStringDraftBuilder = TBuilder<TLocalizedStringDraft>;
export type TCreateLocalizedStringDraftBuilder =
  () => TLocalizedStringDraftBuilder;
