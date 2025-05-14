import { KeyReferenceDraft } from '../../../../../commons';
import { ZoneDraft, type TZoneDraft } from '../../../../../zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const europeZone = ZoneDraft.presets.sampleDataB2B.europe().build<TZoneDraft>();

const europe = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(europeZone.key!))
    .shippingRates([
      ShippingRateDraft.presets.sampleDataB2B.eur30000(),
      ShippingRateDraft.presets.sampleDataB2B.gbp30000(),
    ]);

export default europe;
