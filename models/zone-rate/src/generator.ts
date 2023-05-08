import { Generator } from '@commercetools-test-data/core';
import { TZoneRate } from './types';

// https://docs.commercetools.com/api/types#centprecisionmoney

const generator = Generator<TZoneRate>({
  fields: {
    zone: '{`TODO: add zone`}',
    shippingRates: '{`TODO: add shipping rates`}',
  },
});

export default generator;
