import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const j234Wx20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('j234-wx-2015-2')
    .sku('j234-wx-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1089000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default j234Wx20152;
