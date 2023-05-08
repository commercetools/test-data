import { Generator } from '@commercetools-test-data/core';
import { TShippingRate } from './types';

// https://docs.commercetools.com/api/types#centprecisionmoney

const generator = Generator<TShippingRate>({
  fields: {},
});

export default generator;
