import { KeyReferenceDraft } from '@/models/commons';
import { TZoneDraft, ZoneDraft } from '@/models/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const usaZone = ZoneDraft.presets.sampleDataB2CLifestyle
  .countryUsa()
  .build<TZoneDraft>();

const expressUsa = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(usaZone.key!))
    .shippingRates([
      ShippingRateDraft.presets.sampleDataB2CLifestyle.usd75000(),
    ]);

export default expressUsa;
