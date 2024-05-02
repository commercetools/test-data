import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsImageRegex } from '@commercetools-test-data/graphql-types/src/generated/settings';

export type TImageRegex = Omit<TMcSettingsImageRegex, '__typename'>;

export type TImageRegexGraphql = TMcSettingsImageRegex;

export type TImageRegexBuilder = TBuilder<TImageRegex>;
export type TCreateImageRegexBuilder = () => TImageRegexBuilder;
