import type { CustomFieldNumberType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpNumberType } from '@/graphql-types';

export type TCustomFieldNumberType = CustomFieldNumberType;
export type TCustomFieldNumberTypeDraft = CustomFieldNumberType;

export type TCustomFieldNumberTypeGraphql = TCtpNumberType;
export type TCustomFieldNumberTypeDraftGraphql = {
  number: {
    dummy: string | null;
  };
};

export type TCustomFieldNumberTypeBuilder = TBuilder<TCustomFieldNumberType>;
export type TCustomFieldNumberTypeDraftBuilder =
  TBuilder<TCustomFieldNumberTypeDraft>;

export type TCreateCustomFieldNumberTypeBuilder =
  () => TCustomFieldNumberTypeBuilder;
export type TCreateCustomFieldNumberTypeDraftBuilder =
  () => TCustomFieldNumberTypeDraftBuilder;
