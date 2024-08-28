import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ddd890OpBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ddd890-op-blue-2')
    .sku('ddd890-op-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(8250000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ddd890OpBlue2;
