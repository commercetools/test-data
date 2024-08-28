import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const j234Wx20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('j234-wx-2015-3')
    .sku('j234-wx-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1452000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default j234Wx20153;
