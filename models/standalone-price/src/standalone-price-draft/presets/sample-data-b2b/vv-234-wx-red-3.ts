import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const vv234WxRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-red-3')
    .sku('vv234-wx-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5280000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default vv234WxRed3;
