import { fake, type TModelFieldsConfig } from '@/core';
import { TAssociateRoleDraftRest, TAssociateRoleDraftGraphql } from '../types';

// Reference REST docs: https://docs.commercetools.com/api/projects/associate-roles#associateroledraft

const commonFieldsConfig = {
  key: fake((f) => f.string.alphanumeric(10)),
  buyerAssignable: null,
  name: null,
  permissions: null,
  custom: null,
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
