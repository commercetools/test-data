import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jj234Wx20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jj234-wx-2023-2')
    .sku('jj234-wx-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3025000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default jj234Wx20232;
