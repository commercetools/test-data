import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ii789Uv20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ii789-uv-2023-2')
    .sku('ii789-uv-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3025000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ii789Uv20232;
