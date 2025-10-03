import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import {
  AttributeReferenceRest,
  AttributeReferenceGraphql,
} from '../attribute-reference';
import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/attribute-groups#attributegroupdraft

const commonFieldsConfig = {
  key: null,
  description: null,
  name: fake(() => LocalizedString.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeGroupDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    attributes: fake(() => [AttributeReferenceRest.random().build()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeGroupDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      attributes: fake(() => [AttributeReferenceGraphql.random().build()]),
    },
  };
