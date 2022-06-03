import { faker } from '@faker-js/faker';
import type { TLocalizedStringBuilder } from '../types';
import LocalizedString from '../builder';

const ofSlugs = (): TLocalizedStringBuilder =>
  LocalizedString()
    .en(faker.lorem.slug())
    .de(faker.lorem.slug())
    .fr(faker.lorem.slug());

export default ofSlugs;
