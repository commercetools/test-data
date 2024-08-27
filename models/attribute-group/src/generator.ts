import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { ClientLogging } from '../../commons/src';
import { TAttributeGroup } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TAttributeGroup>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    name: fake((f) => f.lorem.words(2)),
    description: fake((f) => f.lorem.sentences(2)),
    key: fake((f) => f.lorem.slug(2)),
    attributes: [],
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
