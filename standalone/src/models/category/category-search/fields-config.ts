import { fake, sequence, type TModelFieldsConfig } from '@/core';
import { LocalizedString, ReferenceGraphql } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TCategorySearchGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCategorySearchGraphql> = {
  fields: {
    ancestors: [],
    ancestorsRef: [], // computed
    assets: [],
    childCount: 0,
    children: [],
    createdAt: fake(getOlderDate),
    custom: null,
    description: null, // computed
    descriptionAllLocales: null,
    externalId: fake((f) => f.string.uuid()),
    id: fake((f) => f.string.uuid()),
    key: fake((f) => f.lorem.slug(3)),
    lastModifiedAt: fake(getNewerDate),
    name: null, // computed
    nameAllLocales: fake(() => LocalizedString.random()),
    orderHint: fake((f) => f.number.float({ min: 0.01, max: 0.99 }).toString()),
    parent: null,
    parentRef: null, // computed
    productTypeNames: [],
    slug: null, // computed
    slugAllLocales: fake(() => LocalizedString.presets.ofSlugs()),
    stagedProductCount: 0,
    version: sequence(),
    __typename: 'CategorySearch',
  },
  postBuild: (model) => {
    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : null;
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : null;
    const slug = model.slugAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.slugAllLocales)
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
      name,
      slug,
      description,
      ancestorsRef,
      parentRef,
    };
  },
};
