import {
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { Generator, fake, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TCategory } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCategory>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedBy: fake(() => ClientLogging.random()),
    name: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    description: null,
    ancestors: [],
    parent: null,
    orderHint: fake((f) => f.number.float({ min: 0.01, max: 0.99 }).toString()),
    externalId: fake((f) => f.string.uuid()),
    metaTitle: null,
    metaDescription: null,
    metaKeywords: null,
    custom: null,
    assets: null,
  },
});

export default generator;
