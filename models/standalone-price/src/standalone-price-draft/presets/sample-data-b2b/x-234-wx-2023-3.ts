import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const x234Wx20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('x234-wx-2023-3')
    .sku('x234-wx-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3080000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default x234Wx20233;
