import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bbb234WxRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bbb234-wx-red-2')
    .sku('bbb234-wx-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(7920000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bbb234WxRed2;
