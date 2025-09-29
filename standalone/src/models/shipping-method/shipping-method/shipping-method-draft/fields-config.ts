import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import type {
  TShippingMethodDraftRest,
  TShippingMethodDraftGraphql,
} from '../types';

const commonFieldsConfig = {
  key: fake((f) => f.lorem.slug(2)),
  name: fake((f) => f.lorem.words(2)),
  description: fake((f) => f.lorem.sentence()),
  localizedName: fake(() => LocalizedString.random()),
  localizedDescription: fake(() => LocalizedString.random()),
  taxCategory: null,
  zoneRates: null,
  isDefault: fake((f) => f.datatype.boolean()),
  predicate: null,
  active: fake(() => false),
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TShippingMethodDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingMethodDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
    postBuild: (model) => {
      const localizedNameAllLocales = model.localizedName
        ? LocalizedString.toLocalizedField(model.localizedName)
        : null;
      const localizedDescriptionAllLocales = model.localizedDescription
        ? LocalizedString.toLocalizedField(model.localizedDescription)
        : null;

      return {
        ...model,
        __typename: 'ShippingMethodDraft',
        localizedNameAllLocales,
        localizedDescriptionAllLocales,
      };
    },
  };
