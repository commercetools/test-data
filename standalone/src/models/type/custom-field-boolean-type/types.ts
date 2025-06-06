import type { CustomFieldBooleanType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpBooleanType } from '@/graphql-types';

export type TCustomFieldBooleanType = CustomFieldBooleanType;
export type TCustomFieldBooleanTypeDraft = CustomFieldBooleanType;

export type TCustomFieldBooleanTypeGraphql = TCtpBooleanType;
export type TCustomFieldBooleanTypeDraftGraphql = {
  boolean: {
    dummy: string | null;
  };
};

export type TCustomFieldBooleanTypeBuilder = TBuilder<TCustomFieldBooleanType>;
export type TCustomFieldBooleanTypeDraftBuilder =
  TBuilder<TCustomFieldBooleanTypeDraft>;

export type TCreateCustomFieldBooleanTypeBuilder =
  () => TCustomFieldBooleanTypeBuilder;
export type TCreateCustomFieldBooleanTypeDraftBuilder =
  () => TCustomFieldBooleanTypeDraftBuilder;
