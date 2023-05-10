import { KeyReference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { Zone } from '@commercetools-test-data/zone';
import * as ShippingRate from '../shipping-rate';
import { TZoneRate } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#zonerate

// zone: fake(() => KeyReference.presets.zone()),
const generator = Generator<TZoneRate>({
  fields: {
    zone: fake(() => Zone.random()),
    shippingRates: fake(() => [ShippingRate.random()]),
  },
});

export default generator;
