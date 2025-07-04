import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';

import type {
  TProductTailoringDataGraphql,
  TProductTailoringDataRest,
} from './types';

const commonFieldsConfig = {
  slug: fake((f) => f.lorem.slug(2)),
  description: null,
  metaTitle: null,
  metaDescription: null,
  metaKeywords: null,
  variants: [],
};

export const restFieldsConfig: TModelFieldsConfig<TProductTailoringDataRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake(() => LocalizedString.random()),
    attributes: [],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductTailoringDataGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      name: null,
      nameAllLocales: fake(() => LocalizedString.random()),
      slugAllLocales: fake(() => LocalizedString.random()),
      descriptionAllLocales: null,
      metaTitleAllLocales: null,
      metaDescriptionAllLocales: null,
      metaKeywordsAllLocales: null,
      __typename: 'ProductTailoringData',
      attributesRaw: [],
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
      const slug = model.slugAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.slugAllLocales)
        : null;
      const metaTitle = model.metaTitleAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.metaTitleAllLocales
          )
        : null;
      const metaDescription = model.metaDescriptionAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.metaDescriptionAllLocales
          )
        : null;
      const metaKeywords = model.metaKeywordsAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.metaKeywordsAllLocales
          )
        : null;

      return {
        ...model,
        name,
        description,
        slug,
        metaTitle,
        metaDescription,
        metaKeywords,
      };
    },
  };
