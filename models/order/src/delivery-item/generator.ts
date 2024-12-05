import type { DeliveryItem } from '@commercetools/platform-sdk';
import { fake, Generator } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/projects/orders#ctp:api:type:DeliveryItem
const generator = Generator<DeliveryItem>({
  fields: {
    id: fake((f) => f.string.uuid()),
    quantity: fake((f) => f.number.int()),
  },
});

export default generator;
