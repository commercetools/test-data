import { faker } from '@faker-js/faker';
import type { TLocalizedStringBuilder } from '../../types';
import LocalizedStringDraft from '../builder';

const ofSlugs = (): TLocalizedStringBuilder =>
  LocalizedStringDraft()
    .en(faker.lorem.slug())
    .de(faker.lorem.slug())
    .fr(faker.lorem.slug());

export default ofSlugs;
