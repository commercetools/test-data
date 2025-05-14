import type { CustomFieldTimeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpTimeType } from '@/graphql-types';

export type TCustomFieldTimeType = CustomFieldTimeType;
export type TCustomFieldTimeTypeDraft = CustomFieldTimeType;

export type TCustomFieldTimeTypeGraphql = TCtpTimeType;
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
