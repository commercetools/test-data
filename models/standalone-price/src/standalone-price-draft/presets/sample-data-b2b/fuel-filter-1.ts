import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fuelFilter1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fuel-filter-1')
    .sku('fuel-filter')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3250))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default fuelFilter1;
