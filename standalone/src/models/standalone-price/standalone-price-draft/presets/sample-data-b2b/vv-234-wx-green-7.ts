import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const vv234WxGreen7 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-green-7')
    .sku('vv234-wx-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(4800000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default vv234WxGreen7;
