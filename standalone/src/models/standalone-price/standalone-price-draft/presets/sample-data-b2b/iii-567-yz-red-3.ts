import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const iii567YzRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('iii567-yz-red-3')
    .sku('iii567-yz-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(15840000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default iii567YzRed3;
