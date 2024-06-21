import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TFilterValues } from './types';

const [getCreatedAt, getUpdatedAt] = createRelatedDates();

const generator = Generator<TFilterValues>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getCreatedAt),
    updatedAt: fake(getUpdatedAt),
    target: fake((f) => f.lorem.slug(3)),
    type: oneOf(
      'EqualTo',
      'In',
      'LessThan',
      'Missing',
      'MissingIn',
      'MoreThan',
      'Range',
      'CustomField'
    ),
    json: {},
  },
});

export default generator;
