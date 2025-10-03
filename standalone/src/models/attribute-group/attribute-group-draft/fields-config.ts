import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../types';

// https://docs.commercetools.com/api/projects/attribute-groups#attributegroupdraft

const commonFieldsConfig = {
  key: null,
  description: null,
  name: fake(() => LocalizedString.random()),
  attributes: fake(() => []), // TODO: attributeReference[]
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeGroupDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeGroupDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
