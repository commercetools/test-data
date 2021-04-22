import type { TCategory } from './types';
import { Generator, fake, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/types#referencetype
const generator = Generator<TCategory>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    name: null,
    slug: null,
    description: null,
    ancestors: [],
    parent: null,
    orderHint: fake((f) => String(f.datatype.number())),
    externalId: fake((f) => f.datatype.uuid()),
    metaTitle: null,
    metaDescription: null,
    metaKeywords: null,
    custom: null,
    assets: null,
  },
});

export default generator;
