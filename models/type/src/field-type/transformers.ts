import { Reference } from '@commercetools-test-data/commons';
import {
  Transformer,
  buildField,
  buildFields,
} from '@commercetools-test-data/core';
import { faker } from '@faker-js/faker';
import * as CustomFieldEnumValue from '../custom-field-enum-value';
import { TCustomFieldEnumValue } from '../custom-field-enum-value';
import * as CustomFieldLocalizedEnumValue from '../custom-field-localized-enum-value';
import { TCustomFieldLocalizedEnumValue } from '../custom-field-localized-enum-value';
import FieldType from './builder';
import { typeNames, graphqlTypenameByFieldTypeName } from './constants';
import { TFieldName, TFieldType, TFieldTypeGraphql } from './types';

const list = <T>(fn: (index?: number) => T) =>
  Array.from({ length: faker.number.int({ min: 1, max: 7 }) }, (_, index) =>
    fn(index)
  );

const resolveCommonTransformations = <T extends TFieldType | TFieldTypeGraphql>(
  fields: TFieldType
): T => {
  const commonFields = {
    name: fields.name as TFieldName,
  } as T;

  switch (fields.name) {
    case 'Enum':
      return {
        ...commonFields,
        values: buildFields(
          (fields.values as TCustomFieldEnumValue[]) ||
            list(CustomFieldEnumValue.random),
          'rest'
        ),
      };
    case 'LocalizedEnum':
      return {
        ...commonFields,
        values: buildFields(
          (fields.values as TCustomFieldLocalizedEnumValue[]) ||
            list(CustomFieldLocalizedEnumValue.random),
          'rest'
        ),
      };
    case 'Reference':
      return {
        ...commonFields,
        referenceTypeId:
          fields.referenceTypeId ||
          faker.helpers.arrayElement(
            Object.values(Reference.constants.referenceTypes)
          ),
      };
    case 'Set':
      return {
        ...commonFields,
        elementType: fields.elementType
          ? buildField(fields.elementType, 'graphql')
          : FieldType()
              .name(
                faker.helpers.arrayElement(
                  typeNames.filter((type) => type !== 'Set')
                ) as TFieldName
              )
              .buildGraphql<TFieldTypeGraphql>(),
      };
    default:
      return commonFields;
  }
};

const transformers = {
  default: Transformer<TFieldType, TFieldType>('default', {
    replaceFields: ({ fields }) =>
      resolveCommonTransformations<TFieldType>(fields),
  }),
  rest: Transformer<TFieldType, TFieldType>('rest', {
    replaceFields: ({ fields }) =>
      resolveCommonTransformations<TFieldType>(fields),
  }),
  graphql: Transformer<TFieldType, TFieldTypeGraphql>('graphql', {
    replaceFields: ({ fields }) => ({
      ...resolveCommonTransformations<TFieldTypeGraphql>(fields),
      __typename: graphqlTypenameByFieldTypeName[fields.name],
    }),
  }),
};

export default transformers;
