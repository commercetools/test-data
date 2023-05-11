import { TZoneDraftBuilder } from '../../../types';
import * as ZoneDraft from '../../index';

const countryUsa = (): TZoneDraftBuilder =>
  ZoneDraft.presets
    .empty()
    .name('USA')
    .key('usa')
    .locations([{ country: 'US' }]);

export default countryUsa;
