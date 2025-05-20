import type { TBuilder } from '@/core';
import type { TMcSettingsImageRegex } from '@/graphql-types';

export type TImageRegex = Omit<TMcSettingsImageRegex, '__typename'>;

export type TImageRegexGraphql = TMcSettingsImageRegex;

export type TImageRegexBuilder = TBuilder<TImageRegex>;
export type TCreateImageRegexBuilder = () => TImageRegexBuilder;
