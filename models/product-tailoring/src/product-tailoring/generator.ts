import { ClientLogging } from '@commercetools-test-data/commons';
import { Generator, fake } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as ProductTailoringData from '../product-tailoring-data';
import type { TProductTailoring } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TProductTailoring>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: fake((f) => f.number.int({ min: 1 })),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    key: fake((f) => f.string.uuid()),
    product: {
      typeId: 'product',
      id: fake((f) => f.string.uuid()),
    },
    store: {
      typeId: 'store',
      key: fake((f) => f.string.uuid()),
    },
    current: fake(() => ProductTailoringData.random().build()),
    staged: fake(() => ProductTailoringData.random().build()),
    createdBy: fake(() => ClientLogging.random().build()),
    lastModifiedBy: fake(() => ClientLogging.random().build()),
    published: fake((f) => f.datatype.boolean()),
    hasStagedChanges: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
