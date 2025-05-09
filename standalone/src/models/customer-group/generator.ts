import { sequence, fake, Generator } from '../../core';
import { createRelatedDates } from '../../utils';
import { ClientLogging } from '../commons';
import { TCustomerGroup } from './types';

// https://docs.commercetools.com/api/projects/customerGroups#customergroup

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomerGroup>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
