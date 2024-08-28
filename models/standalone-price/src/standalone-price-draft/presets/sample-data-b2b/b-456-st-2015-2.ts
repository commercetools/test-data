import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const b456St20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('b456-st-2015-2')
    .sku('b456-st-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(940500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default b456St20152;
