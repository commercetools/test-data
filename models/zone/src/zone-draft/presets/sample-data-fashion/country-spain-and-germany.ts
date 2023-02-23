import ZoneDraft from '../../builder';

const withCountrySpainAndGermany = () =>
  ZoneDraft()
    .name('Europe')
    .key('europe')
    .locations([{ country: 'ES' }, { country: 'DE' }]);

export default withCountrySpainAndGermany;
