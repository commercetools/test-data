import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const airFilter1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('air-filter-1')
    .sku('air-filter')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(4000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default airFilter1;
