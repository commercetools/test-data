import { Generator, fake, oneOf, sequence } from '@/core';
import { ClientLogging, LocalizedString } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TProductSelection } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/product-selections#productselection

const generator = Generator<TProductSelection>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    productCount: fake((f) => f.number.int()),
    mode: oneOf('Individual', 'IndividualExclusion'),
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
