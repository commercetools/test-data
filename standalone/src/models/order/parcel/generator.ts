import type { Parcel } from '@commercetools/platform-sdk';
import { fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';
import { DeliveryItem } from '../delivery-item';
import { ParcelMeasurements } from '../parcel-measurements';
import { TrackingData } from '../tracking-data';

const [getOlderDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/orders#parcel

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
