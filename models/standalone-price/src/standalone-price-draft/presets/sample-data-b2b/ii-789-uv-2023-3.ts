import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ii789Uv20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ii789-uv-2023-3')
    .sku('ii789-uv-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3850000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ii789Uv20233;
