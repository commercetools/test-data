import { KeyReference } from '@commercetools-test-data/commons';
import { ZoneDraft, type TZoneDraft } from '@commercetools-test-data/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const usaZone = ZoneDraft.presets.sampleDataGoodStore
  .countryUsa()
  .build<TZoneDraft>();

const usa = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReference.presets.zone().key(usaZone.key!))
    .shippingRates([ShippingRateDraft.presets.sampleDataGoodStore.usd5000()]);

export default usa;
