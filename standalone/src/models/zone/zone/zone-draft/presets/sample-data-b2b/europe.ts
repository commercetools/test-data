import * as ZoneDraft from '../../index';

const countryEurope = () =>
  ZoneDraft.presets
    .empty()
    .name('Europe')
    .key('europe')
    .locations([
      { country: 'DE' },
      { country: 'ES' },
      { country: 'FR' },
      { country: 'GB' },
    ])
    .description('Shipping zone for Europe');

export default countryEurope;
