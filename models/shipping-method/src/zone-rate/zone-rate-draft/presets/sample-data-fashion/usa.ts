import { KeyReference } from '@commercetools-test-data/commons';
import { ZoneDraft, type TZoneDraft } from '@commercetools-test-data/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const usaZone = ZoneDraft.presets.sampleDataFashion
  .countryUsa()
  .build<TZoneDraft>();

const usa = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReference.presets.zoneReference().key(usaZone.key!))
    .shippingRates([ShippingRateDraft.presets.sampleDataFashion.usd1299()]);

export default usa;
