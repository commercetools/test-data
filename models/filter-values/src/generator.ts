import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TFilterValues } from './types';

// https://github.com/commercetools/merchant-center-services/blob/main/packages/settings/lib/schemas/shared.graphql

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
