import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const cc789Uv20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('cc789-uv-2019-3')
    .sku('cc789-uv-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3146000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default cc789Uv20193;
