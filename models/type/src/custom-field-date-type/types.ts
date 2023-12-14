import type { CustomFieldDateType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldDateType = CustomFieldDateType;
export type TCustomFieldDateTypeDraft = CustomFieldDateType;

export type TCustomFieldDateTypeGraphql = CustomFieldDateType & {
  __typename: 'DateCustomFieldType';
};
export type TCustomFieldDateTypeDraftGraphql = {
  date: {
    dummy: string | null;
  };
};

export type TCustomFieldDateTypeBuilder = TBuilder<TCustomFieldDateType>;
export type TCustomFieldDateTypeDraftBuilder =
  TBuilder<TCustomFieldDateTypeDraft>;

export type TCreateCustomFieldDateTypeBuilder =
  () => TCustomFieldDateTypeBuilder;
export type TCreateCustomFieldDateTypeDraftBuilder =
  () => TCustomFieldDateTypeDraftBuilder;
