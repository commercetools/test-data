import { fake, Generator } from '../../../core';
import { TLocation } from './types';

// https://docs.commercetools.com/api/projects/zones#location

const generator = Generator<TLocation>({
  fields: {
    country: fake((f) => f.location.countryCode()),
    state: fake((f) => f.location.state()),
  },
});

export default generator;
