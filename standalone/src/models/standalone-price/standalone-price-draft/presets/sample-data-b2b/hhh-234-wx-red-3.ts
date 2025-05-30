import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-red-3')
    .sku('hhh234-wx-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(13200000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hhh234WxRed3;
