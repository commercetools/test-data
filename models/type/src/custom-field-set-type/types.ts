import { CustomFieldSetType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpSetType } from '../../../../graphql-types/src';

export type TCustomFieldSetType = CustomFieldSetType;
export type TCustomFieldSetTypeDraft = CustomFieldSetType;

export type TCustomFieldSetTypeGraphql = TCtpSetType;
export type TCustomFieldSetTypeDraftGraphql = {
  set: {
    elementType: TCustomFieldSetTypeGraphql['elementType'];
  };
};

export type TCustomFieldSetTypeBuilder = TBuilder<TCustomFieldSetType>;
export type TCustomFieldSetTypeDraftBuilder =
  TBuilder<TCustomFieldSetTypeDraft>;

export type TCreateCustomFieldSetTypeBuilder = () => TCustomFieldSetTypeBuilder;
export type TCreateCustomFieldSetTypeDraftBuilder =
  () => TCustomFieldSetTypeDraftBuilder;
