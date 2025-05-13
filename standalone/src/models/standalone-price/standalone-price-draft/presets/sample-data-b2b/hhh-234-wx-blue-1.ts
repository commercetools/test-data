import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxBlue1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-blue-1')
    .sku('hhh234-wx-blue')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(12100000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hhh234WxBlue1;
