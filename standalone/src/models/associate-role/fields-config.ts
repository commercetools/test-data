import { fake, sequence, TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { TAssociateRoleRest, TAssociateRoleGraphql } from './types';

// Reference REST docs: https://docs.commercetools.com/api/projects/associate-roles#associaterole

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: fake((f) => f.string.alphanumeric(10)),
  buyerAssignable: fake((f) => f.datatype.boolean()),
  name: null,
  permissions: [],
  custom: null,
  createdAt: fake(getOlderDate),
  createdBy: null,
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: null,
};

export const restFieldsConfig: TModelFieldsConfig<TAssociateRoleRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAssociateRoleGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'AssociateRole',
  },
};
