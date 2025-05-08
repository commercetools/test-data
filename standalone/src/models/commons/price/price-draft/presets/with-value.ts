import { MoneyDraft } from '../../../money';
import PriceDraft from '../builder';

const withValue = ({ currency = 'USD' } = {}) =>
  PriceDraft().value(MoneyDraft.presets.withCurrency(currency));

export default withValue;
