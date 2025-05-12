import { Generator, fake } from '../../../core';
import { CentPrecisionMoney } from '../../commons';
import { TShippingRate } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingrate

const generator = Generator<TShippingRate>({
  fields: {
    price: fake(() => CentPrecisionMoney.random()),
    freeAbove: fake(() => CentPrecisionMoney.random()),
    tiers: [],
    isMatching: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
