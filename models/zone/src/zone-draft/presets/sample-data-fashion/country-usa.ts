import { TZoneDraftBuilder } from '../../../types';
import ZoneDraft from '../../builder';

const countryUsa = (): TZoneDraftBuilder =>
  ZoneDraft()
    .name('USA')
    .key('usa')
    .locations([{ country: 'US' }]);

export default countryUsa;
