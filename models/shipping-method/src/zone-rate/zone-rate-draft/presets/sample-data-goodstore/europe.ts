import { KeyReference } from '@commercetools-test-data/commons';
import { ZoneDraft, type TZoneDraft } from '@commercetools-test-data/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const europeZone = ZoneDraft.presets.sampleDataGoodStore
  .countryGermanyAndUk()
  .build<TZoneDraft>();

const europe = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReference.presets.zone().key(europeZone.key!))
    .shippingRates([
      ShippingRateDraft.presets.sampleDataGoodStore.eur10000(),
      ShippingRateDraft.presets.sampleDataGoodStore.gbp10000(),
    ]);

export default europe;
