import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TAssociateRoleDraftRest,
  TAssociateRoleDraftGraphql,
} from '../types';

const commonFieldsConfig = {
  buyerAssignable: fake((f) => f.datatype.boolean()),
  custom: null,
  key: fake((f) => f.string.alphanumeric(10)),
  name: null,
  permissions: [],
};

export const restFieldsConfig: TModelFieldsConfig<TAssociateRoleDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAssociateRoleDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
