import type { CustomFieldReferenceType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldReferenceType = CustomFieldReferenceType;
export type TCustomFieldReferenceTypeDraft = CustomFieldReferenceType;

export type TCustomFieldReferenceTypeGraphql = CustomFieldReferenceType & {
  __typename: 'ReferenceCustomFieldType';
};

export type TCustomFieldReferenceTypeDraftGraphql = {
  reference: {
    referenceTypeId: TCustomFieldReferenceTypeGraphql['referenceTypeId'];
  };
};

export type TCustomFieldReferenceTypeBuilder =
  TBuilder<TCustomFieldReferenceType>;
export type TCustomFieldReferenceTypeDraftBuilder =
  TBuilder<TCustomFieldReferenceTypeDraft>;

export type TCreateCustomFieldReferenceTypeBuilder =
  () => TCustomFieldReferenceTypeBuilder;
export type TCreateCustomFieldReferenceTypeDraftBuilder =
  () => TCustomFieldReferenceTypeDraftBuilder;
