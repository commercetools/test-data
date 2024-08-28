import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const v456St20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('v456-st-2019-3')
    .sku('v456-st-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3575000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default v456St20193;
