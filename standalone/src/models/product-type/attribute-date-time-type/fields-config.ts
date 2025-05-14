import { TModelFieldsConfig } from '../../../core';
import {
  TAttributeDateTimeTypeGraphql,
  TAttributeDateTimeTypeRest,
} from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetimetype

const commonFieldsConfig = {
  name: 'datetime',
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeDateTimeTypeRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeDateTimeTypeGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'DateTimeAttributeDefinitionType',
    },
  };
