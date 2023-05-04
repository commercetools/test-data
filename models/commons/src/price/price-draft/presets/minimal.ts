import * as Money from '../../../money';
import PriceDraft from '../builder';

const minimal = () => PriceDraft().value(Money.presets.withCurrency('USD'));

export default minimal;
