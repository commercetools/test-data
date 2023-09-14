import * as ZoneDraft from '../../index';

const countryUnitedKingdom = () =>
  ZoneDraft.presets
    .empty()
    .name('United Kingdom')
    .key('unitedkingdom')
    .locations([{ country: 'GB' }]);

export default countryUnitedKingdom;
