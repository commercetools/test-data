import * as ZoneDraft from '../../index';

const countryUS = () =>
  ZoneDraft.presets
    .empty()
    .name('USA')
    .key('usa')
    .locations([{ country: 'US' }]);

export default countryUS;
