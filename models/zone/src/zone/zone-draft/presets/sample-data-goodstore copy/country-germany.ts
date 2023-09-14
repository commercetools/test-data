import * as ZoneDraft from '../../index';

const countryGermany = () =>
  ZoneDraft.presets
    .empty()
    .name('Europe')
    .key('europe')
    .locations([{ country: 'DE' }]);

export default countryGermany;
