import type { CustomFieldStringType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpStringType } from '../../../../graphql-types/src';

export type TCustomFieldStringType = CustomFieldStringType;
export type TCustomFieldStringTypeDraft = CustomFieldStringType;

export type TCustomFieldStringTypeGraphql = TCtpStringType;
export type TCustomFieldStringTypeDraftGraphql = {
  string: {
    dummy: string | null;
  };
};

export type TCustomFieldStringTypeBuilder = TBuilder<TCustomFieldStringType>;
export type TCustomFieldStringTypeDraftBuilder =
  TBuilder<TCustomFieldStringTypeDraft>;

export type TCreateCustomFieldStringTypeBuilder =
  () => TCustomFieldStringTypeBuilder;
export type TCreateCustomFieldStringTypeDraftBuilder =
  () => TCustomFieldStringTypeDraftBuilder;
