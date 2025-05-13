import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bbb234WxBlue5 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bbb234-wx-blue-5')
    .sku('bbb234-wx-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(7200000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default bbb234WxBlue5;
