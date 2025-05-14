import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TCategoryOrderHintGraphql,
  TCategoryOrderHintRest,
} from './types';

const commonFieldsConfig = {
  categoryId: fake((f) => f.string.uuid()),
  orderHint: fake(() => String(Math.random())),
};

export const restFieldsConfig: TModelFieldsConfig<TCategoryOrderHintRest> = {
  // NOTE: technically, the rest representation is a key-value pair of categoryId and orderHint.
  // However, representing it in the model is not really possible (the key is a random uuid).
  // So we need to convert the key-value pair to a list of CategoryOrderHint objects.
  // This way we can still define a rest model but with a special way of representing the data.
  fields: {
    ...commonFieldsConfig,
  },
  postBuild: (model) => {
    return {
      [model.categoryId]: model.orderHint,
    };
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCategoryOrderHintGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CategoryOrderHint',
    },
  };
