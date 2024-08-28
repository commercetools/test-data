import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ddd890OpRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ddd890-op-red-2')
    .sku('ddd890-op-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(7425000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ddd890OpRed2;
