import * as ZoneDraft from '../../index';

const countryGreatBritain = () =>
  ZoneDraft.presets
    .empty()
    .name('Great Britain')
    .key('greatbritain')
    .locations([{ country: 'GB' }]);

export default countryGreatBritain;