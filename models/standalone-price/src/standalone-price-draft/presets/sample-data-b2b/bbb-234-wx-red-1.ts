import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bbb234WxRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bbb234-wx-red-1')
    .sku('bbb234-wx-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(8800000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default bbb234WxRed1;
