import { TZoneDraftBuilder } from '../../../types';
import * as ZoneDraft from '../../index';

const countryAustralia = (): TZoneDraftBuilder =>
  ZoneDraft.presets
    .empty()
    .name('Australia')
    .key('australia')
    .locations([{ country: 'AU' }]);

export default countryAustralia;
