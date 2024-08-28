import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const h456St20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('h456-st-2023-1')
    .sku('h456-st-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1584000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default h456St20231;
