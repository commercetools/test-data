import { CustomFieldLocalizedEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpLocalizedEnumValue,
  TCtpLocalizedEnumValueInput,
} from '@/graphql-types';

export type TCustomFieldLocalizedEnumValue = CustomFieldLocalizedEnumValue;
export type TCustomFieldLocalizedEnumValueDraft = CustomFieldLocalizedEnumValue;

export type TCustomFieldLocalizedEnumValueGraphql = TCtpLocalizedEnumValue;
export type TCustomFieldLocalizedEnumValueDraftGraphql =
  TCtpLocalizedEnumValueInput;

export type TCustomFieldLocalizedEnumValueBuilder =
  TBuilder<TCustomFieldLocalizedEnumValue>;
export type TCustomFieldLocalizedEnumValueDraftBuilder =
  TBuilder<TCustomFieldLocalizedEnumValueDraft>;

export type TCreateCustomFieldLocalizedEnumValueBuilder =
  () => TCustomFieldLocalizedEnumValueBuilder;
export type TCreateCustomFieldLocalizedEnumValueDraftBuilder =
  () => TCustomFieldLocalizedEnumValueDraftBuilder;
