import { fake, sequence, TModelFieldsConfig } from '@/core';
import {
  ClientLogging,
  LocalizedString,
  ReferenceGraphql,
} from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TCategoryGraphql, TCategoryRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFields = {
  assets: [],
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  custom: null,
  externalId: fake((f) => f.string.uuid()),
  id: fake((f) => f.string.uuid()),
  key: fake((f) => f.lorem.slug(2)),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  orderHint: fake((f) => f.number.float({ min: 0.01, max: 0.99 }).toString()),
  version: sequence(),
};

export const restFieldsConfig: TModelFieldsConfig<TCategoryRest> = {
  fields: {
    ...commonFields,
    ancestors: [],
    description: null,
    key: fake((f) => f.lorem.slug(2)),
    metaDescription: null,
    metaKeywords: null,
    metaTitle: null,
    name: fake(() => LocalizedString.random()),
    parent: null,
    slug: fake(() => LocalizedString.presets.ofSlugs()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCategoryGraphql> = {
  fields: {
    ...commonFields,
    ancestors: [],
    ancestorsRef: [], // computed
    childCount: 0,
    children: null,
    description: null, // computed
    descriptionAllLocales: [],
    metaDescription: null, // computed
    metaDescriptionAllLocales: null,
    metaKeywords: null, // computed
    metaKeywordsAllLocales: null,
    metaTitle: null, // computed
    metaTitleAllLocales: null,
    name: null, // computed
    nameAllLocales: fake(() => LocalizedString.random()),
    parent: null,
    parentRef: null, // computed
    slug: null, // computed
    slugAllLocales: fake(() => LocalizedString.presets.ofSlugs()),
    stagedProductCount: 0,
    __typename: 'Category',
  },
  postBuild: (model, context) => {
    let descriptionAllLocales = model.descriptionAllLocales;
    let metaDescriptionAllLocales = model.metaDescriptionAllLocales;
    let metaKeywordsAllLocales = model.metaKeywordsAllLocales;
    let metaTitleAllLocales = model.metaTitleAllLocales;
    let nameAllLocales = model.nameAllLocales;
    let slugAllLocales = model.slugAllLocales;

    if (context?.isCompatMode) {
      // In the compatibility builder, consumers are already providing the LocalizedString objects
      // to the computed fields in the GraphQL version so we need to account for that.
      // @ts-ignore
      descriptionAllLocales = model.description;
      // @ts-ignore
      metaDescriptionAllLocales = model.metaDescription;
      // @ts-ignore
      metaKeywordsAllLocales = model.metaKeywords;
      // @ts-ignore
      metaTitleAllLocales = model.metaTitle;
      // @ts-ignore
      nameAllLocales = model.name;
      // @ts-ignore
      slugAllLocales = model.slug;
    }

    const description = descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(descriptionAllLocales)
      : null;
    const metaDescription = metaDescriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          metaDescriptionAllLocales
        )
      : null;
    const metaKeywords = metaKeywordsAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(metaKeywordsAllLocales)
      : null;
    const metaTitle = metaTitleAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(metaTitleAllLocales)
      : null;
    const name = nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales)
      : null;
    const slug = slugAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(slugAllLocales)
      : null;

    const ancestorsRef = model.ancestors
      ? model.ancestors.map((ancestor) => {
          return ReferenceGraphql.presets
            .categoryReference()
            .id(ancestor.id)
            .build();
        })
      : [];

    const parentRef = model.parent
      ? ReferenceGraphql.presets.categoryReference().id(model.parent.id).build()
      : null;

    return {
      ...model,
      ancestorsRef,
      description,
      descriptionAllLocales,
      metaDescription,
      metaDescriptionAllLocales,
      metaKeywords,
      metaKeywordsAllLocales,
      metaTitle,
      metaTitleAllLocales,
      name,
      nameAllLocales,
      parentRef,
      slug,
      slugAllLocales,
    };
  },
};
