import { KeyReferenceDraft } from '@/models/commons';
import { ZoneDraft, type TZoneDraft } from '@/models/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const europeZone = ZoneDraft.presets.sampleDataFashion
  .countrySpainAndGermany()
  .build<TZoneDraft>();

const europe = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(europeZone.key!))
    .shippingRates([ShippingRateDraft.presets.sampleDataFashion.eur1299()]);

export default europe;
