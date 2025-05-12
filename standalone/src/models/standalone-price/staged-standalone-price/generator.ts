import { fake, Generator } from '../../../core';
import { Money } from '../../commons';
import { TStagedStandalonePrice } from './types';

// https://docs.commercetools.com/api/projects/standalone-prices#stagedstandaloneprice

const generator = Generator<TStagedStandalonePrice>({
  fields: {
    value: fake(() => Money.random()),
    discounted: null,
  },
});

export default generator;
