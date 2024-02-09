import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { ZoneDraft, type TZoneDraft } from '@commercetools-test-data/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const australiaZone = ZoneDraft.presets.sampleDataFashion
  .countryAustralia()
  .build<TZoneDraft>();

const australia = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(australiaZone.key!))
    .shippingRates([ShippingRateDraft.presets.sampleDataFashion.aud2000()]);

export default australia;
