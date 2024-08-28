import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const vv234WxBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-blue-2')
    .sku('vv234-wx-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4400000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default vv234WxBlue2;
