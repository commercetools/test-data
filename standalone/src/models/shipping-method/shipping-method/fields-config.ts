import { fake, sequence, type TModelFieldsConfig } from '@/core';
import {
  ClientLogging,
  LocalizedString,
  ReferenceRest,
} from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TShippingMethodRest, TShippingMethodGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: fake((f) => f.lorem.slug(2)),
  name: fake((f) => f.lorem.words(2)),
  description: fake((f) => f.lorem.sentence()),
  localizedName: fake(() => LocalizedString.random()),
  localizedDescription: fake(() => LocalizedString.random()),
  taxCategory: fake(() => ReferenceRest.random().typeId('tax-category')),
  zoneRates: fake(() => []),
  isDefault: fake((f) => f.datatype.boolean()),
  predicate: '1=1',
  active: fake(() => false),
  custom: null,
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TShippingMethodRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingMethodGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'ShippingMethod',
    localizedNameAllLocales: null,
    localizedDescriptionAllLocales: null,
    taxCategoryRef: null,
  },
  postBuild: (model) => {
    const localizedNameAllLocales = model.localizedName
      ? LocalizedString.toLocalizedField(LocalizedString.random())
      : null;
    const localizedDescriptionAllLocales = model.localizedDescription
      ? LocalizedString.toLocalizedField(LocalizedString.random())
      : null;
    const taxCategoryRef = model.taxCategory
      ? ReferenceRest.random()
          .id(model.taxCategory.id)
          .typeId('tax-category')
          .buildGraphql()
      : null;

    return {
      ...model,
      localizedNameAllLocales,
      localizedDescriptionAllLocales,
      taxCategoryRef,
    };
  },
};
