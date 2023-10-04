import * as ZoneDraft from '../../index';

const countryGermanyAndUk = () =>
  ZoneDraft.presets
    .empty()
    .name('Europe')
    .key('europe')
    .locations([{ country: 'DE' }, { country: 'GB' }]);

export default countryGermanyAndUk;
