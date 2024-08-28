import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bbb234WxGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bbb234-wx-green-1')
    .sku('bbb234-wx-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(10560000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bbb234WxGreen1;
