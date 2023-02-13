import * as AttributeDefinition from '@commercetools-test-data/attribute-definition';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TProductType } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/productTypes#product-types

const generator = Generator<TProductType>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    key: fake((f) => f.lorem.slug()),
    version: fake((f) => f.datatype.number()),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    name: fake((f) => f.random.words(2)),
    description: fake((f) => f.random.words()),
    attributes: fake(() => [AttributeDefinition.random()]),
  },
});

export default generator;
