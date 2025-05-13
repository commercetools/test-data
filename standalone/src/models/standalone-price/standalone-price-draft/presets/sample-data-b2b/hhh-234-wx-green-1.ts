import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-green-1')
    .sku('hhh234-wx-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(13200000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hhh234WxGreen1;
