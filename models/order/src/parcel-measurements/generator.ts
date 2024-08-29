import type { ParcelMeasurements } from '@commercetools/platform-sdk';
import { fake, Generator } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/projects/orders#ctp:api:type:ParcelMeasurements

const generator = Generator<ParcelMeasurements>({
  fields: {
    heightInMillimeter: fake((f) => f.number.int({ min: 10, max: 10000 })),
    lengthInMillimeter: fake((f) => f.number.int({ min: 10, max: 10000 })),
    widthInMillimeter: fake((f) => f.number.int({ min: 10, max: 10000 })),
    weightInGram: fake((f) => f.number.int({ min: 10, max: 1000 })),
  },
});

export default generator;
