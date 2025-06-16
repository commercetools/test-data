import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { LocalizedString, TLocalizedStringGraphql } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TCategorySearchGraphql } from '../category/types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCategorySearchGraphql> = {
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    externalId: fake((f) => f.string.uuid()),
    name: null, //computed
    slug: null,
    description: null,
    ancestors: [],
    parent: null,
    orderHint: fake((f) => f.number.float({ min: 0.01, max: 0.99 }).toString()),
    assets: null,
    custom: null,
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    ancestorsRef: [],
    childCount: 0,
    children: [],
    stagedProductCount: 0,
    __typename: 'CategorySearch',
    descriptionAllLocales: null,
    nameAllLocales: fake(() => LocalizedString.random()),
    parentRef: null,
    slugAllLocales: fake(() => LocalizedString.presets.ofSlugs()),
    productTypeNames: null,
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : model.name;

    const slugAllLocales =
      LocalizedString.toLocalizedField(model.slug) ?? undefined;
    const descriptionAllLocales =
      model.description as unknown as TLocalizedStringGraphql;

    return {
      name,
      slugAllLocales,
      descriptionAllLocales,
      description: LocalizedString.resolveGraphqlDefaultLocaleValue(
        descriptionAllLocales
      ),
      slug: LocalizedString.resolveGraphqlDefaultLocaleValue(slugAllLocales),
    };
  },
};
