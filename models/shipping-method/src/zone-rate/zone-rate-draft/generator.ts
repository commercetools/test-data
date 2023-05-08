import { Generator } from '@commercetools-test-data/core';
import { TZoneRateDraft } from '../types';

// https://docs.commercetools.com/api/types#money

const generator = Generator<TZoneRateDraft>({
  fields: {
    zone: '{`TODO: add zone`}',
    shippingRates: '{`TODO: add shipping rates`}',
  },
});

export default generator;
