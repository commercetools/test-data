import { fake, oneOf, TModelFieldsConfig } from '@/core';
import { LocalizedString } from '../../commons';
import { roles, types } from '../constants';
import { TStateDraftGraphql, TStateDraftRest } from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  name: fake(() => LocalizedString.random()),
  type: oneOf(...Object.values(types)),
  description: fake(() => LocalizedString.random()),
  initial: fake((f) => f.datatype.boolean()),
  roles: [oneOf(...Object.values(roles))],
  transitions: null,
};

export const restFieldsConfig: TModelFieldsConfig<TStateDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TStateDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};
