import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { ZoneDraft, type TZoneDraft } from '@commercetools-test-data/zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const europeZone = ZoneDraft.presets.sampleDataB2CLifestyle
  .europeAndUk()
  .build<TZoneDraft>();

const europeExpress = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key(europeZone.key!))
    .shippingRates([
      ShippingRateDraft.presets.sampleDataB2CLifestyle.eur50000(),
      ShippingRateDraft.presets.sampleDataB2CLifestyle.gbp50000(),
    ]);

export default europeExpress;
