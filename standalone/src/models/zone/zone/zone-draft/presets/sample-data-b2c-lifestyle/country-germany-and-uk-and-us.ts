import * as ZoneDraft from '../../index';

const countryGermanyAndUkAndUs = () =>
  ZoneDraft.presets
    .empty()
    .name('Germany, UK and US')
    .key('germany-uk-us')
    .locations([{ country: 'DE' }, { country: 'GB' }, { country: 'US' }]);

export default countryGermanyAndUkAndUs;
