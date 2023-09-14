import * as ZoneDraft from '../../index';

const countryGermany = () =>
  ZoneDraft.presets
    .empty()
    .name('Germany')
    .key('germany')
    .locations([{ country: 'DE' }]);

export default countryGermany;
