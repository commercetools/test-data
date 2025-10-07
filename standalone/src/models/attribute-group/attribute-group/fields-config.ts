import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { ClientLogging, LocalizedString } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TAttributeGroupGraphql, TAttributeGroupRest } from './types';

// Reference: https://docs.commercetools.com/api/projects/attribute-groups#attributegroup

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  attributes: fake(() => []),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  description: null,
  id: fake((f) => f.string.uuid()),
  key: null,
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  name: fake(() => LocalizedString.random()),
  version: sequence(),
};

export const restFieldsConfig: TModelFieldsConfig<TAttributeGroupRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TAttributeGroupGraphql> = {
  fields: {
    ...commonFieldsConfig,
    nameAllLocales: fake(() => LocalizedString.random()),
    descriptionAllLocales: null,
    __typename: 'AttributeGroup',
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : model.name;
    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : model.description;

    return { ...model, name, description };
  },
};
