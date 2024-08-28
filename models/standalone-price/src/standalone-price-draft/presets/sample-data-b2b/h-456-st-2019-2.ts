import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const h456St20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('h456-st-2019-2')
    .sku('h456-st-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1320000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default h456St20192;
