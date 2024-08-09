import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TCategory, TCategoryGraphql } from './types';

const buildFields: Array<keyof TCategory> = [
  'createdBy',
  'lastModifiedBy',
  'name',
  'slug',
  'description',
  'ancestors',
  'parent',
  'metaTitle',
  'metaDescription',
  'metaKeywords',
  'custom',
  'assets',
];

const transformers = {
  default: Transformer<TCategory, TCategory>('default', {
    buildFields,
  }),
  rest: Transformer<TCategory, TCategory>('rest', {
    buildFields,
  }),
  graphql: Transformer<TCategory, TCategoryGraphql>('graphql', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'ancestors',
      'parent',
      'custom',
      'assets',
    ],
    replaceFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );
      const slugAllLocales = LocalizedString.toLocalizedField(fields.slug);
      const metaTitleAllLocales = LocalizedString.toLocalizedField(
        fields.metaTitle
      );
      const metaKeywordsAllLocales = LocalizedString.toLocalizedField(
        fields.metaKeywords
      );
      const metaDescriptionAllLocales = LocalizedString.toLocalizedField(
        fields.metaDescription
      );

      return {
        ...(fields as unknown as TCategoryGraphql),
        __typename: 'Category',
        name: LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales)!,
        nameAllLocales,
        description: LocalizedString.resolveGraphqlDefaultLocaleValue(
          descriptionAllLocales
        ),
        descriptionAllLocales,
        slug: LocalizedString.resolveGraphqlDefaultLocaleValue(slugAllLocales)!,
        slugAllLocales,
        metaTitle:
          LocalizedString.resolveGraphqlDefaultLocaleValue(metaTitleAllLocales),
        metaTitleAllLocales,
        metaKeywords: LocalizedString.resolveGraphqlDefaultLocaleValue(
          metaKeywordsAllLocales
        ),
        metaKeywordsAllLocales,
        metaDescription: LocalizedString.resolveGraphqlDefaultLocaleValue(
          metaDescriptionAllLocales
        ),
        metaDescriptionAllLocales,
      };
    },
  }),
};

export default transformers;
