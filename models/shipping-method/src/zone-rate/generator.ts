import { KeyReference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import * as ShippingRate from '../shipping-rate';
import { TZoneRate } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#zonerate

const generator = Generator<TZoneRate>({
  fields: {
    zone: fake(() => KeyReference.presets.zone()),
    shippingRates: fake(() => [ShippingRate.random()]),
  },
});

export default generator;
