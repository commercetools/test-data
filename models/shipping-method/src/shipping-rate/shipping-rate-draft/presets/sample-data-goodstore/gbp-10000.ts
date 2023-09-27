import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const gbp10000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(CentPrecisionMoney.random().currencyCode('GBP').centAmount(10000))
    .tiers([]);

export default gbp10000;
