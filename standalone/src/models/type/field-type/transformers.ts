import { faker } from '@faker-js/faker';
import { Transformer, buildField, buildFields } from '@/core';
import { Reference } from '@/models/commons';
import * as CustomFieldEnumValue from '../custom-field-enum-value';
import { TCustomFieldEnumValue } from '../custom-field-enum-value';
import * as CustomFieldLocalizedEnumValue from '../custom-field-localized-enum-value';
import { TCustomFieldLocalizedEnumValue } from '../custom-field-localized-enum-value';
import FieldType from './builder';
import { typeNames, graphqlTypenameByFieldTypeName } from './constants';
import { TFieldName, TFieldType, TFieldTypeGraphql } from './types';

// This function is used to create a list of models builders between 1 and 7 elements
const list = <T>(fn: () => T) =>
  Array.from({ length: faker.number.int({ min: 1, max: 7 }) }, () => fn());

const resolveCommonTransformations = <T extends TFieldType | TFieldTypeGraphql>(
  fields: TFieldType,
  transformerType: 'default' | 'rest' | 'graphql'
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
          transformerType
        ),
      };
    case 'LocalizedEnum':
      return {
        ...commonFields,
        values: buildFields(
          (fields.values as TCustomFieldLocalizedEnumValue[]) ||
            list(CustomFieldLocalizedEnumValue.random),
          transformerType
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
      resolveCommonTransformations<TFieldType>(fields, 'default'),
  }),
  rest: Transformer<TFieldType, TFieldType>('rest', {
    replaceFields: ({ fields }) =>
      resolveCommonTransformations<TFieldType>(fields, 'rest'),
  }),
  graphql: Transformer<TFieldType, TFieldTypeGraphql>('graphql', {
    replaceFields: ({ fields }) => ({
      ...resolveCommonTransformations<TFieldTypeGraphql>(fields, 'graphql'),
      __typename: graphqlTypenameByFieldTypeName[fields.name],
    }),
  }),
};

export default transformers;
