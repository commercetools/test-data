import { KeyReferenceDraft } from '@/models/commons';
import { TZoneDraft, ZoneDraft } from '@/models/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const europeZone = ZoneDraft.presets.sampleDataB2CLifestyle
  .europeAndUk()
  .build<TZoneDraft>();

const expressEuropeUk = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(europeZone.key!))
    .shippingRates([
      ShippingRateDraft.presets.sampleDataB2CLifestyle.eur75000(),
      ShippingRateDraft.presets.sampleDataB2CLifestyle.gbp75000(),
    ]);

export default expressEuropeUk;
