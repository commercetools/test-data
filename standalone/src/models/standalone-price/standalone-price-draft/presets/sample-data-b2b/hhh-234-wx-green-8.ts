import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxGreen8 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-green-8')
    .sku('hhh234-wx-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(11000000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default hhh234WxGreen8;
