import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const zz456StRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('zz456-st-red-2')
    .sku('zz456-st-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3465000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default zz456StRed2;
