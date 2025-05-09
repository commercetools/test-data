import * as ZoneDraft from '../../index';

const countryAustralia = () =>
  ZoneDraft.presets
    .empty()
    .name('Australia')
    .key('australia')
    .locations([{ country: 'AU' }]);

export default countryAustralia;
