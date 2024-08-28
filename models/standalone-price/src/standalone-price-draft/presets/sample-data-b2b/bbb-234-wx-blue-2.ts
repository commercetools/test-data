import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bbb234WxBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bbb234-wx-blue-2')
    .sku('bbb234-wx-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(8800000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bbb234WxBlue2;
