import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { ClientLogging, LocalizedString } from '../commons';
import type { TDiscountGroupGraphql, TDiscountGroupRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  key: fake((f) => f.string.alphanumeric({ length: { min: 2, max: 256 } })),
  version: sequence(),
  sortOrder: fake((f) =>
    String(f.number.float({ min: 0.00000001, max: 0.99999999 }))
  ),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountGroupRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountGroupGraphql> = {
  fields: {
    ...commonFieldsConfig,
    name: null,
    description: null,
    nameAllLocales: fake(() => LocalizedString.random()),
    descriptionAllLocales: fake(() => LocalizedString.random()),
    __typename: 'DiscountGroup',
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : null;

    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : null;

    return {
      ...model,
      name,
      description,
    };
  },
};
