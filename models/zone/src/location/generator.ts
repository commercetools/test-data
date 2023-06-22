import { fake, Generator } from '@commercetools-test-data/core';
import { TLocation } from './types';

// https://docs.commercetools.com/api/projects/zones#location

const generator = Generator<TLocation>({
  fields: {
    country: fake((f) => f.address.countryCode()),
    state: fake((f) => f.address.state()),
  },
});

export default generator;
