import { KeyReferenceDraft } from '../../../../../../commons';
import { TZoneDraft, ZoneDraft } from '../../../../../../zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const usaZone = ZoneDraft.presets.sampleDataB2CLifestyle
  .countryUsa()
  .build<TZoneDraft>();

const standardUsa = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(usaZone.key!))
    .shippingRates([
      ShippingRateDraft.presets.sampleDataB2CLifestyle.usd50000(),
    ]);

export default standardUsa;
