import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jj234Wx20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jj234-wx-2019-3')
    .sku('jj234-wx-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3575000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default jj234Wx20193;
