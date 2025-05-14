import { CustomFieldLocalizedEnumValue } from '@commercetools/platform-sdk';
import { buildField, Transformer } from '@/core';
import { TCustomFieldLocalizedEnumValueGraphql } from '../custom-field-localized-enum-value';
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
      values: fields.values!.map((value) =>
        buildField<
          CustomFieldLocalizedEnumValue,
          TCustomFieldLocalizedEnumValueGraphql
        >(value, 'graphql')
      ),
      __typename: 'LocalizedEnumType',
    }),
  }),
};

export default transformers;
