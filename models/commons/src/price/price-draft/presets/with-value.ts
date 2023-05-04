import * as Money from '../../../money';
import PriceDraft from '../builder';

const withValue = ({ currency = 'USD' } = {}) =>
  PriceDraft().value(Money.presets.withCurrency(currency));

export default withValue;
