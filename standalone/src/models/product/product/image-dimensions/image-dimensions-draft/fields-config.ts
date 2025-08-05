import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TImageDimensionsDraftGraphql,
  TImageDimensionsDraftRest,
} from '../types';

export const restFieldsConfig: TModelFieldsConfig<TImageDimensionsDraftRest> = {
  fields: {
    w: fake((f) => f.number.int({ min: 150, max: 300 })),
    h: fake((f) => f.number.int({ min: 150, max: 300 })),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TImageDimensionsDraftGraphql> =
  {
    fields: {
      width: fake((f) => f.number.int({ min: 150, max: 300 })),
      height: fake((f) => f.number.int({ min: 150, max: 300 })),
    },
  };
