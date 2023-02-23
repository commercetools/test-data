import { fake, Generator } from '@commercetools-test-data/core';
import { TZoneDraft } from '../types';

// https://docs.commercetools.com/api/projects/zones#zonedraft

const generator = Generator<TZoneDraft>({
  fields: {
    name: fake((f) => f.lorem.words(2)),
    key: fake((f) => f.lorem.slug(2)),
    description: fake((f) => f.lorem.sentence()),
    locations: fake((f) => [{ country: f.address.countryCode() }]),
  },
});

export default generator;
