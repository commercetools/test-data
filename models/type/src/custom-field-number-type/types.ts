import type { CustomFieldNumberType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldNumberType = CustomFieldNumberType;
export type TCustomFieldNumberTypeDraft = CustomFieldNumberType;

export type TCustomFieldNumberTypeGraphql = CustomFieldNumberType & {
  __typename: 'NumberCustomFieldType';
};
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
