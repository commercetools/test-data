import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type { TCategoryOrderHintGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TCategoryOrderHintGraphql> =
  {
    fields: {
      __typename: 'CategoryOrderHint',
      categoryId: fake((f) => f.string.uuid()),
      orderHint: fake(() => String(Math.random())),
    },
  };
