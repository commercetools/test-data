import { KeyReferenceDraft } from '../../../../../commons';
import { ZoneDraft, type TZoneDraft } from '../../../../../zone';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const europeZone = ZoneDraft.presets.sampleDataB2CLifestyle
  .europeAndUk()
  .build<TZoneDraft>();

const usaZone = ZoneDraft.presets.sampleDataB2CLifestyle
  .countryUsa()
  .build<TZoneDraft>();

const express = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone([
      KeyReferenceDraft.presets.zone().key(europeZone.key!),
      KeyReferenceDraft.presets.zone().key(usaZone.key!),
    ])
    .shippingRates([
      ShippingRateDraft.presets.sampleDataB2CLifestyle.eur75000(),
      ShippingRateDraft.presets.sampleDataB2CLifestyle.gbp75000(),
      ShippingRateDraft.presets.sampleDataB2CLifestyle.usd75000(),
    ]);

export default express;
