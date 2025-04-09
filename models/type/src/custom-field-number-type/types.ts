import type { CustomFieldNumberType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpNumberType } from '../../../../graphql-types/src';

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
