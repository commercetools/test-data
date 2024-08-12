import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type {
  TCategory,
  TCategoryGraphql,
  TIntermediateCategoryGraphql,
} from './types';

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
    buildFields,
    replaceFields: <TIntermediateCategoryGraphql>({ fields }) => {
      return {
        ...fields,
        __typename: 'Category',
        name: LocalizedString.resolveGraphqlDefaultLocaleValue(fields.name)!,
        nameAllLocales: fields.name,
        description: LocalizedString.resolveGraphqlDefaultLocaleValue(
          fields.description
        ),
        descriptionAllLocales: fields.description,
        slug: LocalizedString.resolveGraphqlDefaultLocaleValue(fields.slug)!,
        slugAllLocales: fields.slug,
        metaTitle: LocalizedString.resolveGraphqlDefaultLocaleValue(
          fields.metaTitle
        ),
        metaTitleAllLocales: fields.metaTitle,
        metaKeywords: LocalizedString.resolveGraphqlDefaultLocaleValue(
          fields.metaKeywords
        ),
        metaKeywordsAllLocales: fields.metaKeywords,
        metaDescription: LocalizedString.resolveGraphqlDefaultLocaleValue(
          fields.metaDescription
        ),
        metaDescriptionAllLocales: fields.metaDescription,
      };
    },
  }),
};

export default transformers;
