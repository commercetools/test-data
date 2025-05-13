import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const vv234WxGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-green-1')
    .sku('vv234-wx-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(5280000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default vv234WxGreen1;
