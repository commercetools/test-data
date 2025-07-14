import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { ClientLogging } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TAssociateRoleGraphql, TAssociateRoleRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  buyerAssignable: fake((f) => f.datatype.boolean()),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  custom: null,
  id: fake((f) => f.string.uuid()),
  key: fake((f) => f.string.alphanumeric(10)),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  name: null,
  permissions: [],
  version: sequence(),
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
