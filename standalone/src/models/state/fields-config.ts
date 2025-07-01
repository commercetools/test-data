import { fake, oneOf, sequence, TModelFieldsConfig } from '@/core';
import { TCtpStateRole, TCtpStateType } from '@/graphql-types';
import { createRelatedDates } from '@/utils';
import { ClientLogging, LocalizedString } from '../commons';
import { TStateGraphql, TStateRest } from './types';

const [getNewerDate, getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: fake((f) => f.lorem.slug(2)),
  type: oneOf(...Object.values(TCtpStateType)),
  initial: fake((f) => f.datatype.boolean()),
  builtIn: fake((f) => f.datatype.boolean()),
  roles: [oneOf(...Object.values(TCtpStateRole))],
  transitions: null,
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TStateRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TStateGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'State',
    transitionsRef: null,
    name: null,
    description: null,
    nameAllLocales: fake(() => LocalizedString.random().buildGraphql()),
    descriptionAllLocales: fake(() => LocalizedString.random().buildGraphql()),
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : undefined;
    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : undefined;
    return {
      ...model,
      name,
      description,
    };
  },
};
