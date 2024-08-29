import { Reference } from '@commercetools-test-data/commons';
import { Transformer, buildField } from '@commercetools-test-data/core';
import * as EnumValue from '../enum-value';
import * as LocalizedEnumValue from '../localized-enum-value';
import FieldType from './builder';
import { typeNames, graphqlTypenameByFieldTypeName } from './constants';
import { TFieldType, TFieldTypeGraphql } from './types';

// Returns an array of enum value builders (randomly between 1 to 7)
const getRandomEnumValueBuilders = () =>
  Array(Math.floor(Math.random() * 6 + 1))
    .fill(0)
    .map((_) => EnumValue.random());

// Returns an array of localized enum value builders (randomly between 1 to 7)
const getRandomLocalizedEnumValueBuilders = () =>
  Array(Math.floor(Math.random() * 6 + 1))
    .fill(0)
    .map((_) => LocalizedEnumValue.random());

const pickRandomFromList = (list: string[]) =>
  list[(Math.random() * list.length) | 0];

const transformers = {
  default: Transformer<TFieldType, TFieldType>('default', {}),
  rest: Transformer<TFieldType, TFieldType>('rest', {}),
  graphql: Transformer<TFieldType, TFieldTypeGraphql>('graphql', {
    replaceFields: ({ fields }) => {
      const commonFields = {
        name: fields.name,
        __typename: graphqlTypenameByFieldTypeName[fields.name],
      };

      if (fields.name === 'Enum') {
        const enumValues = fields.values || getRandomEnumValueBuilders();
        return {
          ...commonFields,
          values: enumValues.map((enumValue) =>
            buildField(enumValue, 'graphql')
          ),
        };
      }

      if (fields.name === 'LocalizedEnum') {
        const lenumValues =
          fields.values || getRandomLocalizedEnumValueBuilders();
        return {
          ...commonFields,
          values: lenumValues.map((value) => buildField(value, 'graphql')),
        };
      }

      if (fields.name === 'Reference') {
        return {
          ...commonFields,
          referenceTypeId: fields.referenceTypeId || 'customer',
          // pickRandomFromList(
          //   Object.values(Reference.constants.referenceTypes)
          // ),
        };
      }

      if (fields.name === 'Set') {
        const elementType = fields.elementType
          ? buildField(fields.elementType, 'graphql')
          : FieldType()
              .name(
                pickRandomFromList(typeNames.filter((type) => type !== 'Set'))
              )
              .buildGraphql<TFieldType>();

        return {
          ...commonFields,
          elementType,
        };
      }

      return commonFields;
    },
  }),
};

export default transformers;
