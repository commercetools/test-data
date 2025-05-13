import { buildField, Transformer } from '@/core';
import { TAttributeLocalizedEnumValueGraphql } from '../attribute-localized-enum-value';
import {
  type TAttributeLocalizedEnumType,
  type TAttributeLocalizedEnumTypeGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TAttributeLocalizedEnumType,
    TAttributeLocalizedEnumType
  >('default', { buildFields: ['values'] }),
  rest: Transformer<TAttributeLocalizedEnumType, TAttributeLocalizedEnumType>(
    'rest',
    { buildFields: ['values'] }
  ),
  graphql: Transformer<
    TAttributeLocalizedEnumType,
    TAttributeLocalizedEnumTypeGraphql
  >('graphql', {
    buildFields: [],
    replaceFields: ({ fields }) => ({
      ...fields,
      values: {
        results: fields.values!.map((value) =>
          buildField(value, 'graphql')
        ) as unknown as Array<TAttributeLocalizedEnumValueGraphql>,
        total: fields.values.length,
        __typename: 'LocalizableEnumValueTypeResult',
      },
      __typename: 'LocalizableEnumAttributeDefinitionType',
    }),
  }),
};

export default transformers;
