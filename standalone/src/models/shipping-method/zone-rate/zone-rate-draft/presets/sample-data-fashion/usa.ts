import { KeyReferenceDraft } from '@/models/commons';
import { ZoneDraft, type TZoneDraft } from '@/models/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const usaZone = ZoneDraft.presets.sampleDataFashion
  .countryUsa()
  .build<TZoneDraft>();

const usa = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(usaZone.key!))
    .shippingRates([ShippingRateDraft.presets.sampleDataFashion.usd1299()]);

export default usa;
