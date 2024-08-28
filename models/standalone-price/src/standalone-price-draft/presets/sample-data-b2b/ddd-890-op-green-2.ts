import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ddd890OpGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ddd890-op-green-2')
    .sku('ddd890-op-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(9075001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ddd890OpGreen2;
