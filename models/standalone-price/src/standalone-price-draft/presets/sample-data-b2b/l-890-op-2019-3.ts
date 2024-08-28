import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const l890Op20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('l890-op-2019-3')
    .sku('l890-op-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2145000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default l890Op20193;
