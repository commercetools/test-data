import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsImageRegexDataInput } from '@commercetools-test-data/graphql-types/src/generated/settings';

export type TImageRegexDraft = Omit<
  TMcSettingsImageRegexDataInput,
  '__typename'
>;

export type TImageRegexDraftGraphql = TMcSettingsImageRegexDataInput;

export type TImageRegexDraftBuilder = TBuilder<TImageRegexDraft>;
export type TCreateImageRegexDraftBuilder = () => TImageRegexDraftBuilder;
