import { KeyReference } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const usa = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReference.presets.zoneReference().typeId('zone').key('usa'))
    .shippingRates([ShippingRateDraft.presets.sampleDataFashion.usd1299()]);

export default usa;
