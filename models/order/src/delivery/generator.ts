import type { Delivery } from '@commercetools/platform-sdk';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { DeliveryItem } from '../delivery-item';
import { Parcel } from '../parcel';

const [getOlderDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/orders#delivery
const generator = Generator<Delivery>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: null,
    items: [fake(() => DeliveryItem.random())],
    parcels: [fake(() => Parcel.random())],
    address: null,
    custom: null,
    createdAt: fake(getOlderDate),
  },
});

export default generator;
