import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const dd234Wx20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('dd234-wx-2015-2')
    .sku('dd234-wx-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1485000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default dd234Wx20152;
