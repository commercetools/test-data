import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import {
  AttributePlainEnumValueDraftGraphql,
  AttributePlainEnumValueDraftRest,
} from '../../attribute-plain-enum-value/attribute-plain-enum-value-draft';
import {
  TAttributeEnumTypeDraftGraphql,
  TAttributeEnumTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#AttributeEnumType

const commonFieldsConfig = {
  name: 'enum',
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeEnumTypeDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
      values: fake(() => [AttributePlainEnumValueDraftRest.random()]),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeEnumTypeDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      values: fake(() => [AttributePlainEnumValueDraftGraphql.random()]),
    },
  };
