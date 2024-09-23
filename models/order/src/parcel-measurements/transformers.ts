import { Transformer } from '@commercetools-test-data/core';
import type { TParcelMeasurements, TParcelMeasurementsGraphql } from './types';

const transformers = {
  default: Transformer<TParcelMeasurements, TParcelMeasurements>('default', {
    buildFields: [],
  }),
  rest: Transformer<TParcelMeasurements, TParcelMeasurements>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TParcelMeasurements, TParcelMeasurementsGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'ParcelMeasurements',
      }),
    }
  ),
};

export default transformers;
