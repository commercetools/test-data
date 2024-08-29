import type { Parcel } from '@commercetools/platform-sdk';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { DeliveryItem } from '../delivery-item';
import { ParcelMeasurements } from '../parcel-measurements';
import { TrackingData } from '../tracking-data';

const [getOlderDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/orders#Parcel

const generator = Generator<Parcel>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: null,
    measurements: fake(() => ParcelMeasurements.random()),
    trackingData: fake(() => TrackingData.random()),
    items: [fake(() => DeliveryItem.random())],
    custom: null,
    createdAt: fake(getOlderDate),
  },
});

export default generator;
