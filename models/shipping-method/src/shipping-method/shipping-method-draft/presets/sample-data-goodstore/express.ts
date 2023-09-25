import { ShippingMethodDraft } from '../../..';
import eur50000 from '../../../../shipping-rate/shipping-rate-draft/presets/sample-data-goodstore/eur-50000';
import europe from '../../../../zone-rate/zone-rate-draft/presets/sample-data-fashion/europe';

const expressShippingMethod = () =>
  ShippingMethodDraft.presets
    .empty()
    .name('Express Delivery')
    .taxCategory({ typeId: 'tax-category' })
    .zoneRates([europe().shippingRates(eur50000())]);

export default expressShippingMethod;
