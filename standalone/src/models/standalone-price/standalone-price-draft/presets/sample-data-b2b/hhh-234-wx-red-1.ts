import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-red-1')
    .sku('hhh234-wx-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(11000000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hhh234WxRed1;
