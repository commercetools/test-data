import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const zz456StGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('zz456-st-green-2')
    .sku('zz456-st-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4235001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default zz456StGreen2;
