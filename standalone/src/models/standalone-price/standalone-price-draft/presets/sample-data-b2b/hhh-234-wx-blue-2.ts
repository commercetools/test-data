import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-blue-2')
    .sku('hhh234-wx-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(11000000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hhh234WxBlue2;
