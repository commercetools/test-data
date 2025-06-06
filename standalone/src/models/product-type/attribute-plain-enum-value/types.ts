import type { AttributePlainEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpPlainEnumValue, TCtpPlainEnumValueDraft } from '@/graphql-types';

/**
 * @deprecated use `TAttributePlainEnumValueRest` or `TAttributePlainEnumValueGraphql` instead
 */
export type TAttributePlainEnumValue = AttributePlainEnumValue;
/**
 * @deprecated use `TAttributePlainEnumValueRest` or `TAttributePlainEnumValueGraphql` instead
 */
export type TAttributePlainEnumValueDraft = AttributePlainEnumValue;

export type TAttributePlainEnumValueRest = AttributePlainEnumValue;
export type TAttributePlainEnumValueDraftRest = AttributePlainEnumValue;

export type TAttributePlainEnumValueGraphql = TCtpPlainEnumValue;
export type TAttributePlainEnumValueDraftGraphql = TCtpPlainEnumValueDraft;

export type TCreateAttributePlainEnumValueBuilder<
  TAttributePlainEnumValueModel extends
    | TAttributePlainEnumValueRest
    | TAttributePlainEnumValueDraftRest
    | TAttributePlainEnumValueGraphql
    | TAttributePlainEnumValueDraftGraphql,
> = () => TBuilder<TAttributePlainEnumValueModel>;
