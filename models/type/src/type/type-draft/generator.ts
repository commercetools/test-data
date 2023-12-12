import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { resourceTypeIds } from '../constants';
import { TTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/types#typedraft

const generator = Generator<TTypeDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    resourceTypeIds: [oneOf(...Object.values(resourceTypeIds))],
    fieldDefinitions: [],
  },
});

export default generator;
