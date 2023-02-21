import ZoneDraft from '../../builder';

const withCountryUsa = () =>
  ZoneDraft()
    .name('USA')
    .key('usa')
    .locations([{ country: 'US' }]);

export default withCountryUsa;
