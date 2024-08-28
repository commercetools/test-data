import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pistonRingSet2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('piston-ring-set-2')
    .sku('piston-ring-set')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(17500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pistonRingSet2;
