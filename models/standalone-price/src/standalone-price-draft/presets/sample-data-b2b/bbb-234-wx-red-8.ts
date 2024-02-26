import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const bbb234WxRed8 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('bbb234-wx-red-8')
    .sku('bbb234-wx-red')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(8800000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default bbb234WxRed8;
