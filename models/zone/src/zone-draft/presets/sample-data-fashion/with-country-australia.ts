import ZoneDraft from '../../builder';

const withCountryAustralia = () =>
  ZoneDraft()
    .name('Australia')
    .key('australia')
    .locations([{ country: 'AU' }]);

export default withCountryAustralia;
