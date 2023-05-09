import { KeyReference } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../../../shipping-rate';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

const europe = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReference.presets.zoneReference().typeId('zone').key('europe'))
    .shippingRates([ShippingRateDraft.presets.sampleDataFashion.eur1299()]);

export default europe;
