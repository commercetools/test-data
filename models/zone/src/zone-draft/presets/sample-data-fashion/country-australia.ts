import { TZoneDraftBuilder } from '../../../types';
import ZoneDraft from '../../builder';

const countryAustralia = (): TZoneDraftBuilder =>
  ZoneDraft()
    .name('Australia')
    .key('australia')
    .locations([{ country: 'AU' }]);

export default countryAustralia;
