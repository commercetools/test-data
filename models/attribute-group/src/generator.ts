import {
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TAttributeGroup } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TAttributeGroup>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    name: fake(() => LocalizedString.random()),
    description: fake((f) => LocalizedString.random().en(f.lorem.sentences(2))),
    key: fake((f) => f.lorem.slug(2)),
    attributes: [],
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;