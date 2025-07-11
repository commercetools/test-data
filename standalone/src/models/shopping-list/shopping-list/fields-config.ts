import { fake, type TModelFieldsConfig, sequence } from '@/core';
import {
  ClientLogging,
  KeyReference,
  LocalizedString,
  ReferenceGraphql,
} from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TShoppingListGraphql, TShoppingListRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: null,
  businessUnit: null,
  customer: null,
  description: null,
  lineItems: [],
  textLineItems: [],
  deleteDaysAfterLastModification: null,
  anonymousId: null,
  store: null,
  custom: null,
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TShoppingListRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShoppingListGraphql> = {
  fields: {
    ...commonFieldsConfig,
    businessUnitRef: null,
    customerRef: null,
    descriptionAllLocales: null,
    name: null,
    nameAllLocales: fake(() => LocalizedString.random()),
    slug: null,
    slugAllLocales: null,
    storeRef: null,
    __typename: 'ShoppingList',
  },
  postBuild: (model) => {
    const businessUnitRef = model.businessUnit
      ? KeyReference.presets
          .businessUnit()
          .key(model.businessUnit.key)
          .buildGraphql()
      : null;
    const customerRef = model.customer
      ? ReferenceGraphql.presets
          .customerReference()
          .id(model.customer.id)
          .buildGraphql()
      : null;
    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : model.descriptionAllLocales;
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : model.nameAllLocales;
    const slug = model.slugAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.slugAllLocales)
      : model.slugAllLocales;
    const storeRef = model.store
      ? KeyReference.presets.store().key(model.store.key).buildGraphql()
      : null;

    return {
      ...model,
      businessUnitRef,
      customerRef,
      description,
      name,
      slug,
      storeRef,
    };
  },
};
