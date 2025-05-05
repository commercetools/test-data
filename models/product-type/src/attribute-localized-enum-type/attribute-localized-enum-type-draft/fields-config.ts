import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import {
  AttributeLocalizedEnumValueDraftGraphql,
  AttributeLocalizedEnumValueDraftRest,
} from '../../attribute-localized-enum-value/attribute-localized-enum-value-draft';
import {
  TAttributeLocalizedEnumTypeDraftGraphql,
  TAttributeLocalizedEnumTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumtype

export const restFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'lenum'),
      values: fake(() => [AttributeLocalizedEnumValueDraftRest.random()]),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeLocalizedEnumTypeDraftGraphql> =
  {
    fields: {
      values: fake(() => [AttributeLocalizedEnumValueDraftGraphql.random()]),
    },
  };
