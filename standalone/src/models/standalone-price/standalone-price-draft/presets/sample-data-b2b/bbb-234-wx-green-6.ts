import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bbb234WxGreen6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bbb234-wx-green-6')
    .sku('bbb234-wx-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(6400000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default bbb234WxGreen6;
