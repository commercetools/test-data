import ZoneDraft from '../../builder';

const countryUsa = () =>
  ZoneDraft()
    .name('USA')
    .key('usa')
    .locations([{ country: 'US' }]);

export default countryUsa;
