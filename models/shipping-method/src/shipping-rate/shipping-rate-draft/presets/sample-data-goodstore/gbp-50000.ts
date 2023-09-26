import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const gbp50000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(CentPrecisionMoney.random().currencyCode('GBP').centAmount(50000))
    .tiers([]);

export default gbp50000;
