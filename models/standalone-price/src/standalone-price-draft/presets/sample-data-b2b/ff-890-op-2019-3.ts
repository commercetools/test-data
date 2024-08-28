import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ff890Op20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ff890-op-2019-3')
    .sku('ff890-op-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3575000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ff890Op20193;
