import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ll890Op20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ll890-op-2019-3')
    .sku('ll890-op-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5005000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ll890Op20193;
