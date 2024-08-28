import { buildField, Transformer } from '@commercetools-test-data/core';
import type { TCustomFieldLocalizedEnumValueGraphql } from '../custom-field-localized-enum-value';
import {
  type TCustomFieldLocalizedEnumType,
  type TCustomFieldLocalizedEnumTypeGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomFieldLocalizedEnumType,
    TCustomFieldLocalizedEnumType
  >('default', { buildFields: ['values'] }),
  rest: Transformer<
    TCustomFieldLocalizedEnumType,
    TCustomFieldLocalizedEnumType
  >('rest', { buildFields: ['values'] }),
  graphql: Transformer<
    TCustomFieldLocalizedEnumType,
    TCustomFieldLocalizedEnumTypeGraphql
  >('graphql', {
    buildFields: [],
    replaceFields: ({ fields }) => ({
      ...fields,
      values: {
        results: fields.values!.map((value) =>
          buildField(value, 'graphql')
        ) as unknown as Array<TCustomFieldLocalizedEnumValueGraphql>,
        __typename: 'LocalizableEnumValueTypeResult',
      },
      __typename: 'LocalizableEnumCustomFieldType',
    }),
  }),
};

export default transformers;
