import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TDiscountGroupGraphql, TDiscountGroupRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  createdAt: fake(getOlderDate),
  createdBy: null,
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: null,
  key: fake((f) => f.string.alphanumeric({ length: { min: 2, max: 256 } })),
  version: sequence(),
  sortOrder: fake((f) =>
    String(f.number.float({ min: 0.00000001, max: 0.99999999 }))
  ),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountGroupRest> = {
  fields: {
    ...commonFieldsConfig,
    name: null,
    description: null,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountGroupGraphql> = {
  fields: {
    ...commonFieldsConfig,
    name: null,
    description: null,
    nameAllLocales: null,
    descriptionAllLocales: null,
    type: fake((f) => f.lorem.slug(2)),
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
