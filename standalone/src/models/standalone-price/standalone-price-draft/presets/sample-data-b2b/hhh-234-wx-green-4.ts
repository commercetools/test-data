import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxGreen4 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-green-4')
    .sku('hhh234-wx-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(10000000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default hhh234WxGreen4;
