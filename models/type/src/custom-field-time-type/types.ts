import type { CustomFieldTimeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldTimeType = CustomFieldTimeType;
export type TCustomFieldTimeTypeDraft = CustomFieldTimeType;

export type TCustomFieldTimeTypeGraphql = CustomFieldTimeType & {
  __typename: 'TimeCustomFieldType';
};
export type TCustomFieldTimeTypeDraftGraphql = {
  time: {
    dummy: string | null;
  };
};

export type TCustomFieldTimeTypeBuilder = TBuilder<TCustomFieldTimeType>;
export type TCustomFieldTimeTypeDraftBuilder =
  TBuilder<TCustomFieldTimeTypeDraft>;

export type TCreateCustomFieldTimeTypeBuilder =
  () => TCustomFieldTimeTypeBuilder;
export type TCreateCustomFieldTimeTypeDraftBuilder =
  () => TCustomFieldTimeTypeDraftBuilder;
