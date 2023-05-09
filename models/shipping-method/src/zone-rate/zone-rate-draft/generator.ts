import { fake, Generator } from '@commercetools-test-data/core';
import * as Zone from '@commercetools-test-data/zone';
import * as ShippingRateDraft from '../../shipping-rate/shipping-rate-draft/index';
import { TZoneRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#zoneratedraft

const generator = Generator<TZoneRateDraft>({
  fields: {
    zone: fake(() => Zone.random()),
    shippingRates: fake(() => [ShippingRateDraft.random()]),
  },
});

export default generator;
