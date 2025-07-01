import { fake, oneOf, TModelFieldsConfig } from '@/core';
import { TCtpStateRole, TCtpStateType } from '@/graphql-types';
import { LocalizedString } from '../../commons';
import { TStateDraftGraphql, TStateDraftRest } from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  name: fake(() => LocalizedString.random()),
  type: oneOf(...Object.values(TCtpStateType)),
  description: fake(() => LocalizedString.random()),
  initial: fake((f) => f.datatype.boolean()),
  roles: [oneOf(...Object.values(TCtpStateRole))],
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
