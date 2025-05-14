import type { TrackingData } from '@commercetools/platform-sdk';
import { fake, Generator } from '@/core';

// https://docs.commercetools.com/api/projects/orders#trackingdata

const generator = Generator<TrackingData>({
  fields: {
    trackingId: fake((f) => f.lorem.words()),
    carrier: fake((f) => f.lorem.words()),
    provider: fake((f) => f.lorem.words()),
    providerTransaction: fake((f) => f.lorem.words()),
    isReturn: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
