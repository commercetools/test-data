import * as ZoneDraft from '../../index';

const countrySpainAndGermany = () =>
  ZoneDraft.presets
    .empty()
    .name('Europe')
    .key('europe')
    .locations([{ country: 'ES' }, { country: 'DE' }]);

export default countrySpainAndGermany;
