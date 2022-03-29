import { Generator, fake, sequence } from '@commercetools-test-data/core';
import { Initiator, LocalizedString } from '@commercetools-test-data/commons';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TCategory } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCategory>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    createdBy: fake(() => Initiator.random()),
    lastModifiedBy: fake(() => Initiator.random()),
    name: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.random()),
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
