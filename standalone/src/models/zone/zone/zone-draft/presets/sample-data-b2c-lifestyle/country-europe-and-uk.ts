import * as ZoneDraft from '../../index';

const europeAndUk = () =>
  ZoneDraft.presets
    .empty()
    .name('EU and UK')
    .key('europe')
    .locations([{ country: 'DE' }, { country: 'GB' }]);

export default europeAndUk;
