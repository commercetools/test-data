import type { FieldType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCustomFieldEnumValue } from '../custom-field-enum-value';
import { TCustomFieldLocalizedEnumValue } from '../custom-field-localized-enum-value';

export type TFieldName = FieldType['name'];

export type TFieldType = {
  name: TFieldName;
  values?: TCustomFieldEnumValue[] | TCustomFieldLocalizedEnumValue[];
  referenceTypeId?: string;
  elementType?: TFieldType;
};

export type TFieldTypeGraphql = TFieldType & {
  __typename: string;
};

export type TFieldTypeBuilder = TBuilder<TFieldType>;
export type TCreateFieldTypeBuilder = () => TFieldTypeBuilder;