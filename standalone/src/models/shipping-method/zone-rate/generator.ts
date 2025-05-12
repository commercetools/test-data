import { fake, Generator } from '../../../core';
import { Zone } from '../../zone';
import * as ShippingRate from '../shipping-rate';
import { TZoneRate } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#zonerate

const generator = Generator<TZoneRate>({
  fields: {
    zone: fake(() => Zone.random()),
    shippingRates: fake(() => [ShippingRate.random()]),
  },
});

export default generator;
