import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const dd234Wx20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('dd234-wx-2023-3')
    .sku('dd234-wx-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2310000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default dd234Wx20233;
