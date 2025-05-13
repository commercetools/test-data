import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxBlue7 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-blue-7')
    .sku('hhh234-wx-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(12000000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default hhh234WxBlue7;
