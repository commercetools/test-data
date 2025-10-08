import { fake, sequence, type TModelFieldsConfig } from '@/core';
import {
  ClientLogging,
  LocalizedString,
  ReferenceRest,
} from '@/models/commons';
import { TaxCategory } from '@/models/tax-category';
import { createRelatedDates } from '@/utils';
import type { TShippingMethodRest, TShippingMethodGraphql } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingmethod

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: null,
  name: fake((f) => f.lorem.words(2)),
  localizedName: null,
  description: null,
  localizedDescription: null,
  zoneRates: fake(() => []),
  active: fake(() => false),
  isDefault: fake((f) => f.datatype.boolean()),
  predicate: null,
  custom: null,
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TShippingMethodRest> = {
  fields: {
    ...commonFieldsConfig,
    taxCategory: fake(() => ReferenceRest.random().typeId('tax-category')),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingMethodGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'ShippingMethod',
    taxCategory: fake(() => TaxCategory.random()),
    taxCategoryRef: null,
    localizedDescriptionAllLocales: null,
    localizedNameAllLocales: null,
  },
  postBuild: (model) => {
    const taxCategoryRef = model.taxCategory
      ? ReferenceRest.random()
          .id(model.taxCategory.id)
          .typeId('tax-category')
          .buildGraphql()
      : null;

    const localizedName = model.localizedNameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.localizedNameAllLocales
        )
      : null;

    const localizedDescription = model.localizedDescriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.localizedDescriptionAllLocales
        )
      : null;

    return {
      ...model,
      taxCategoryRef,
      localizedName,
      localizedDescription,
    };
  },
};
