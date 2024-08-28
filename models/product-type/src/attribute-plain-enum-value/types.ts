import type { AttributePlainEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributePlainEnumValue = AttributePlainEnumValue;
export type TAttributePlainEnumValueDraft = AttributePlainEnumValue;

export type TAttributePlainEnumValueGraphql = TAttributePlainEnumValue & {
  __typename: 'PlainEnumValue';
};
export type TAttributePlainEnumValueDraftGraphql = AttributePlainEnumValue;

export type TAttributePlainEnumValueBuilder =
  TBuilder<TAttributePlainEnumValue>;
export type TCreateAttributePlainEnumValueBuilder =
  () => TAttributePlainEnumValueBuilder;

export type TAttributePlainEnumValueDraftBuilder =
  TBuilder<TAttributePlainEnumValueDraft>;
export type TCreateAttributePlainEnumValueDraftBuilder =
  () => TAttributePlainEnumValueDraftBuilder;
