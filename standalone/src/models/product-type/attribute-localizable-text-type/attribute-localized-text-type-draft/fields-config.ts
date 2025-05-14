import { fake, TModelFieldsConfig } from '../../../../core';
import {
  TAttributeLocalizableTextTypeDraftGraphql,
  TAttributeLocalizableTextTypeDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizabletexttype

export const restFieldsConfig: TModelFieldsConfig<TAttributeLocalizableTextTypeDraftRest> =
  {
    fields: {
      name: fake(() => 'ltext'),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeLocalizableTextTypeDraftGraphql> =
  {
    fields: {
      dummy: null,
    },
  };
