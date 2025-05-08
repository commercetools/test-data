import { faker } from '@faker-js/faker';
import LocalizedString from '../builder';
import type { TLocalizedStringBuilder } from '../types';

const ofSlugs = (): TLocalizedStringBuilder =>
  LocalizedString()
    .en(faker.lorem.slug())
    .de(faker.lorem.slug())
    .fr(faker.lorem.slug());

export default ofSlugs;
