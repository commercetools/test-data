import { fake, type TModelFieldsConfig } from '@/core';
import { TParcelMeasurementsRest, TParcelMeasurementsGraphql } from './types';

const commonFieldsConfig = {
  heightInMillimeter: fake((f) => f.number.int({ min: 10, max: 10000 })),
  lengthInMillimeter: fake((f) => f.number.int({ min: 10, max: 10000 })),
  widthInMillimeter: fake((f) => f.number.int({ min: 10, max: 10000 })),
  weightInGram: fake((f) => f.number.int({ min: 10, max: 1000 })),
};

export const restFieldsConfig: TModelFieldsConfig<TParcelMeasurementsRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TParcelMeasurementsGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ParcelMeasurements',
    },
  };
