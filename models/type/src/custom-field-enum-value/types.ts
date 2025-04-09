import { CustomFieldEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpEnumValue, TCtpEnumValueInput } from '../../../../graphql-types/src';

export type TCustomFieldEnumValue = CustomFieldEnumValue;
export type TCustomFieldEnumValueDraft = CustomFieldEnumValue;

export type TCustomFieldEnumValueGraphql = TCtpEnumValue;
export type TCustomFieldEnumValueDraftGraphql = TCtpEnumValueInput;

export type TCustomFieldEnumValueBuilder = TBuilder<TCustomFieldEnumValue>;
export type TCustomFieldEnumValueDraftBuilder =
  TBuilder<TCustomFieldEnumValueDraft>;

export type TCreateCustomFieldEnumValueBuilder =
  () => TCustomFieldEnumValueBuilder;
export type TCreateCustomFieldEnumValueDraftBuilder =
  () => TCustomFieldEnumValueDraftBuilder;
