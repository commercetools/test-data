import { fake, TModelFieldsConfig } from '@/core';
import {
  AttributeLocalizedEnumValueDraftGraphql,
  AttributeLocalizedEnumValueDraftRest,
} from '../../attribute-localized-enum-value/attribute-localized-enum-value-draft';
import {
  TAttributeLocalizedEnumTypeDraftGraphql,
  TAttributeLocalizedEnumTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumtype

const commonFieldsConfig = {
  name: 'lenum',
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumTypeDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
      values: fake(() => [AttributeLocalizedEnumValueDraftRest.random()]),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumTypeDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      values: fake(() => [AttributeLocalizedEnumValueDraftGraphql.random()]),
    },
  };
