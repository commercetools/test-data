import {
  KeyReferenceDraft,
  LocalizedString,
  Reference,
} from '@commercetools-test-data/commons';
import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TCategorySearch } from '../types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const CategorySearch = Generator<TCategorySearch>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    description: fake(() => LocalizedString.random()),
    ancestorsRef: [],
    ancestors: [],
    parentRef: fake(() => Reference.random().typeId('category')),
    parent: fake(() => KeyReferenceDraft.presets.category().key('key')),
    externalId: fake((f) => f.string.uuid()),
    stagedProductCount: fake((f) => f.number.int()),
    childCount: fake((f) => f.number.int()),
    productTypeNames: [],
    children: [],
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    orderHint: fake((f) => f.number.float({ min: 0.01, max: 0.99 }).toString()),
    assets: [],
    custom: [],
  },
});

export default CategorySearch;
