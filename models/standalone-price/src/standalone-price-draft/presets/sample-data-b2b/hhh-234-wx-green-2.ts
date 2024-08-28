import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hhh234WxGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hhh234-wx-green-2')
    .sku('hhh234-wx-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(12100000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hhh234WxGreen2;
