import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bbb234WxBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bbb234-wx-blue-3')
    .sku('bbb234-wx-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(11440000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bbb234WxBlue3;
