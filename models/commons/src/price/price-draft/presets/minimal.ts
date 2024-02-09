import { MoneyDraft } from '../../../money';
import PriceDraft from '../builder';

const minimal = () =>
  PriceDraft().value(MoneyDraft.presets.withCurrency('USD'));

export default minimal;
