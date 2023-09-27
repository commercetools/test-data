import { KeyReference } from '@commercetools-test-data/commons';
import { ZoneDraft, type TZoneDraft } from '@commercetools-test-data/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const unitedKingdomZone = ZoneDraft.presets.sampleDataGoodStore
  .countryUnitedKingdom()
  .build<TZoneDraft>();

const unitedKingdom = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReference.presets.zone().key(unitedKingdomZone.key!))
    .shippingRates([
      ShippingRateDraft.presets.sampleDataGoodStore.gbp10000(),
      ShippingRateDraft.presets.sampleDataGoodStore.eur10000(),
    ]);

export default unitedKingdom;
