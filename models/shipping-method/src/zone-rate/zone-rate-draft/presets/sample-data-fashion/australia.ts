import { KeyReference } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const australia = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReference.presets.zoneReference().typeId('zone').key('australia'))
    .shippingRates([ShippingRateDraft.presets.sampleDataFashion.aud2000()]);

export default australia;
