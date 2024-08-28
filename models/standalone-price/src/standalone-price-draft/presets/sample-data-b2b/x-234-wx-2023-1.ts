import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const x234Wx20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('x234-wx-2023-1')
    .sku('x234-wx-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2640000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default x234Wx20231;
