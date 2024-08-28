import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const b456St20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('b456-st-2015-3')
    .sku('b456-st-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1254000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default b456St20153;
