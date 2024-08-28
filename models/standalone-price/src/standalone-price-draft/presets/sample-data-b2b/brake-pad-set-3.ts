import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const brakePadSet3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('brake-pad-set-3')
    .sku('brake-pad-set')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(10000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default brakePadSet3;
