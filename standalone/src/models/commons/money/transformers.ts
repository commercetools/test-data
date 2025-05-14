import { faker } from '@faker-js/faker';
import { Transformer } from '@/core';
import type { TMoney, TMoneyGraphql } from './types';

const transformers = {
  default: Transformer<TMoney, TMoney>('default', {
    buildFields: [],
  }),
  rest: Transformer<TMoney, TMoney>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TMoney, TMoneyGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      type: 'centPrecision',
      fractionDigits: faker.number.int({ min: 1, max: 3 }),
      __typename: 'Money',
    }),
  }),
};

export default transformers;
