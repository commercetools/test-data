import * as ZoneDraft from '../../index';

const countryGreatBritain = () =>
  ZoneDraft.presets
    .empty()
    .name('United Kingdom')
    .key('united_kingdom')
    .locations([{ country: 'GB' }]);

export default countryGreatBritain;
