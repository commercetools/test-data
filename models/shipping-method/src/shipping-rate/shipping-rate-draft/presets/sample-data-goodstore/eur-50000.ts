import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const eur50000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(CentPrecisionMoney.random().currencyCode('EUR').centAmount(50000))
    .tiers([]);

export default eur50000;
