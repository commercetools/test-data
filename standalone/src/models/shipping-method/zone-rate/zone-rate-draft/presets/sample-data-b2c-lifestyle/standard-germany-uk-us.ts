import { KeyReferenceDraft } from '../../../../../../commons';
import { TZoneDraft, ZoneDraft } from '../../../../../../zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const germanyAndUkAndUsZone = ZoneDraft.presets.sampleDataB2CLifestyle
  .countryGermanyAndUkAndUs()
  .build<TZoneDraft>();

const standardGermanyAndUkAndUs = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(germanyAndUkAndUsZone.key!))
    .shippingRates([
      ShippingRateDraft.presets.sampleDataB2CLifestyle.eur50000(),
      ShippingRateDraft.presets.sampleDataB2CLifestyle.gbp50000(),
      ShippingRateDraft.presets.sampleDataB2CLifestyle.usd50000(),
    ]);

export default standardGermanyAndUkAndUs;
