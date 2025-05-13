import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const vv234WxBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-blue-3')
    .sku('vv234-wx-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5720000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default vv234WxBlue3;
