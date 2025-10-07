import { KeyReferenceDraft } from '@/models/commons';
import { ShippingRateDraft } from '../../../../shipping-rate/shipping-rate-draft';
import type { TZoneRateDraftBuilder } from '../../../types';
import * as ZoneRateDraft from '../../index';

// zone with key'e2e-us-zone' will always be set in the project under test
//{ "name": "e2e-us-zone", "key" : "e2e-us-zone", "locations": [{ "country": "US"} ]}

const usZone = (): TZoneRateDraftBuilder =>
  ZoneRateDraft.random()
    .zone(KeyReferenceDraft.presets.zone().key('e2e-us-zone'))
    .shippingRates([
      ShippingRateDraft.presets.changeHistoryData.withUsdCurrency(),
    ]);

export default usZone;
