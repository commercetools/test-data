import * as ZoneDraft from '../../index';

const countryNorthAmerica = () =>
  ZoneDraft.presets
    .empty()
    .name('North America')
    .key('north-america')
    .locations([{ country: 'US' }]);

export default countryNorthAmerica;
