import { fake, type TModelFieldsConfig } from '@/core';
import type { TImageDimensionsGraphql, TImageDimensionsRest } from './types';

export const restFieldsConfig: TModelFieldsConfig<TImageDimensionsRest> = {
  fields: {
    w: fake((f) => f.number.int({ min: 150, max: 300 })),
    h: fake((f) => f.number.int({ min: 150, max: 300 })),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TImageDimensionsGraphql> =
  {
    fields: {
      width: fake((f) => f.number.int({ min: 150, max: 300 })),
      height: fake((f) => f.number.int({ min: 150, max: 300 })),
      __typename: 'Dimensions',
    },
  };
