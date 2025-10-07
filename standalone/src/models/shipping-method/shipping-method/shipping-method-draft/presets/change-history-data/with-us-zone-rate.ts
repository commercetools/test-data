import { ZoneRateDraft } from '../../../../zone-rate/zone-rate-draft';
import * as ShippingMethodDraft from '../../../shipping-method-draft';
import type { TShippingMethodDraftBuilder } from '../../../types';

//default(false) as more than one default method will lead to an error

const withUsZoneRate = (): TShippingMethodDraftBuilder =>
  ShippingMethodDraft.random()
    .taxCategory(null!)
    .zoneRates([ZoneRateDraft.presets.changeHistoryData.usZone()])
    .isDefault(false);

export default withUsZoneRate;
