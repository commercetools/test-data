import * as ZoneDraft from '../../index';

const countryUsa = () =>
  ZoneDraft.presets
    .empty()
    .name('USA')
    .key('usa')
    .locations([{ country: 'US' }]);

export default countryUsa;
