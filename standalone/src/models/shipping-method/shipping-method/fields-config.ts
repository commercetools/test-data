import { fake, sequence, type TModelFieldsConfig } from '@/core';
import {
  ClientLogging,
  LocalizedString,
  ReferenceRest,
  TLocalizedStringGraphql,
} from '@/models/commons';
import { TaxCategory } from '@/models/tax-category';
import { createRelatedDates } from '@/utils';
import { ZoneRateGraphql, ZoneRateRest } from '../zone-rate';
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
    zoneRates: fake(() => [ZoneRateRest.random()]),
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
    zoneRates: fake(() => [ZoneRateGraphql.random()]),
  },
  postBuild: (model, context) => {
    const taxCategoryRef = model.taxCategory
      ? ReferenceRest.random()
          .id(model.taxCategory.id)
          .typeId('tax-category')
          .buildGraphql()
      : null;

    let localizedNameAllLocales = model.localizedNameAllLocales;
    let localizedDescriptionAllLocales = model.localizedDescriptionAllLocales;

    // This is required because of the Compat builder presets.
    // It should be removed when the Compat builder is removed.
    if (context?.isCompatMode && model.localizedName) {
      localizedNameAllLocales =
        model.localizedName as unknown as TLocalizedStringGraphql;
    }
    if (context?.isCompatMode && model.localizedDescription) {
      localizedDescriptionAllLocales =
        model.localizedDescription as unknown as TLocalizedStringGraphql;
    }

    const localizedName = localizedNameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          localizedNameAllLocales
        )
      : null;

    const localizedDescription = localizedDescriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          localizedDescriptionAllLocales
        )
      : null;

    return {
      ...model,
      taxCategoryRef,
      localizedName,
      localizedNameAllLocales,
      localizedDescription,
      localizedDescriptionAllLocales,
    };
  },
};
