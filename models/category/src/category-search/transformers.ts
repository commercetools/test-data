import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import { TCategorySearch, TCategorySearchGraphql } from '../types';

const buildFields: (keyof TCategorySearch)[] = [
  'ancestorsRef',
  'ancestors',
  'parentRef',
  'parent',
  'productTypeNames',
  'children',
  'assets',
  'custom',
];

const transformers = {
  default: Transformer<TCategorySearch, TCategorySearch>('default', {
    buildFields: ['name', 'slug', 'description', ...buildFields],
  }),
  rest: Transformer<TCategorySearch, TCategorySearch>('rest', {
    buildFields: ['name', 'slug', 'description', ...buildFields],
  }),
  graphql: Transformer<TCategorySearch, TCategorySearchGraphql>('graphql', {
    buildFields,
    replaceFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );
      const slugAllLocales = LocalizedString.toLocalizedField(fields.slug);
      return {
        ...fields,
        name:
          LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales) ??
          null,
        nameAllLocales,
        description:
          LocalizedString.resolveGraphqlDefaultLocaleValue(
            descriptionAllLocales
          ) ?? null,
        descriptionAllLocales,
        slug:
          LocalizedString.resolveGraphqlDefaultLocaleValue(slugAllLocales) ??
          null,
        slugAllLocales,
        __typename: 'CategorySearch',
      };
    },
  }),
};

export default transformers;
