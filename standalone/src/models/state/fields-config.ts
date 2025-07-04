import { fake, oneOf, sequence, TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { ClientLogging, LocalizedString, ReferenceGraphql } from '../commons';
import { types } from './constants';
import { TStateGraphql, TStateRest } from './types';

// Public docs: https://docs.commercetools.com/api/projects/states#state

const [getNewerDate, getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: fake((f) => f.lorem.slug(2)),
  type: oneOf(...Object.values(types)),
  initial: fake((f) => f.datatype.boolean()),
  builtIn: fake((f) => f.datatype.boolean()),
  roles: [],
  transitions: [],
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TStateRest> = {
  fields: {
    ...commonFieldsConfig,
    name: null,
    description: null,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TStateGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'State',
    description: null,
    descriptionAllLocales: null,
    key: null,
    name: null,
    nameAllLocales: null,
    transitionsRef: null,
  },
  postBuild: (model, context) => {
    if (context?.isCompatMode) {
      // @ts-expect-error - This is needed for the compat mode as the model is built using the REST properties
      model.nameAllLocales = model.name;
      // @ts-expect-error - This is needed for the compat mode as the model is built using the REST properties
      model.descriptionAllLocales = model.description;
    }

    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : model.name;

    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : model.description;

    const transitionsRef = model.transitions
      ? model.transitions.map((transition) =>
          ReferenceGraphql.presets.stateReference().id(transition.id).build()
        )
      : model.transitions;

    return {
      ...model,
      description,
      name,
      transitionsRef,
    };
  },
};
