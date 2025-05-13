import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const vv234WxBlue6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-blue-6')
    .sku('vv234-wx-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3200000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default vv234WxBlue6;
