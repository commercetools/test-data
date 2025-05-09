import type { TBuilder } from '../../../../core';
import type { TMcSettingsImageRegexDataInput } from '../../../../graphql-types';

export type TImageRegexDraft = Omit<
  TMcSettingsImageRegexDataInput,
  '__typename'
>;

export type TImageRegexDraftGraphql = TMcSettingsImageRegexDataInput;

export type TImageRegexDraftBuilder = TBuilder<TImageRegexDraft>;
export type TCreateImageRegexDraftBuilder = () => TImageRegexDraftBuilder;
