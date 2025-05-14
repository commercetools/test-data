import { KeyReferenceDraft } from '../../../../../commons';
import { ZoneDraft, type TZoneDraft } from '../../../../../zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const northAmericaZone = ZoneDraft.presets.sampleDataB2B
  .northAmerica()
  .build<TZoneDraft>();

const northAmerica = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(northAmericaZone.key!))
    .shippingRates([ShippingRateDraft.presets.sampleDataB2B.usd10000()]);

export default northAmerica;
