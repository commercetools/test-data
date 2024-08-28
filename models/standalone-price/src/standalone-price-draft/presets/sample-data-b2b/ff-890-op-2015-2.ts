import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ff890Op20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ff890-op-2015-2')
    .sku('ff890-op-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2475000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ff890Op20152;
