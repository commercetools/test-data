import { fake, Generator, sequence } from '../../../core';
import { createRelatedDates } from '../../../utils';
import * as MessagesConfiguration from './messages-configuration';
import type { TProject } from './types';

const [getOlderDate] = createRelatedDates();

const generator = Generator<TProject>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    version: sequence(),
    key: fake((f) => f.lorem.slug()),
    name: fake((f) => f.lorem.words()),
    countries: fake(() => ['EN']),
    currencies: fake(() => ['EUR']),
    languages: fake(() => ['en']),
    isProductionProject: fake(() => false),
    initialized: fake(() => true),
    trialUntil: null,
    businessUnits: null,
    searchIndexing: null,
    carts: null,
    messages: fake(() => MessagesConfiguration.random()),
    externalOAuth: null,
    shippingRateInputType: null,
    shoppingLists: null,
  },
});

export default generator;
