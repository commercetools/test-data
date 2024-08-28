import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const cc789Uv20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('cc789-uv-2023-2')
    .sku('cc789-uv-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2662000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default cc789Uv20232;
