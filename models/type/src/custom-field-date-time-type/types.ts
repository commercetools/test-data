import type { CustomFieldDateTimeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpDateTimeType } from '@commercetools-test-data/graphql-types';

export type TCustomFieldDateTimeType = CustomFieldDateTimeType;
export type TCustomFieldDateTimeTypeDraft = CustomFieldDateTimeType;

export type TCustomFieldDateTimeTypeGraphql = TCtpDateTimeType;
export type TCustomFieldDateTimeTypeDraftGraphql = {
  datetime: {
    dummy: string | null;
  };
};

export type TCustomFieldDateTimeTypeBuilder =
  TBuilder<TCustomFieldDateTimeType>;
export type TCustomFieldDateTimeTypeDraftBuilder =
  TBuilder<TCustomFieldDateTimeTypeDraft>;

export type TCreateCustomFieldDateTimeTypeBuilder =
  () => TCustomFieldDateTimeTypeBuilder;
export type TCreateCustomFieldDateTimeTypeDraftBuilder =
  () => TCustomFieldDateTimeTypeDraftBuilder;
