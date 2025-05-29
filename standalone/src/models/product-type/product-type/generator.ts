import { fake, Generator } from '@/core';
import { ClientLogging } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { AttributeDefinition } from '../attribute-definition';
import type { TProductType } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/productTypes#product-types

const generator = Generator<TProductType>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: fake((f) => f.number.int()),
    key: fake((f) => f.lorem.slug()),
    name: fake((f) => f.person.fullName()),
    description: fake((f) => f.lorem.words()),
    attributes: fake(() => [AttributeDefinition.random()]),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
