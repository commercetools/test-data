import { TZoneDraftBuilder } from '../../../types';
import ZoneDraft from '../../builder';

const withCountrySpainAndGermany = (): TZoneDraftBuilder =>
  ZoneDraft()
    .name('Europe')
    .key('europe')
    .locations([{ country: 'ES' }, { country: 'DE' }]);

export default withCountrySpainAndGermany;
