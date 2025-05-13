import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const vv234WxRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-red-2')
    .sku('vv234-wx-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3960000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default vv234WxRed2;
