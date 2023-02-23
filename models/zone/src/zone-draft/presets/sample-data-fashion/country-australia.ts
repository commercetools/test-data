import ZoneDraft from '../../builder';

const countryAustralia = () =>
  ZoneDraft()
    .name('Australia')
    .key('australia')
    .locations([{ country: 'AU' }]);

export default countryAustralia;
