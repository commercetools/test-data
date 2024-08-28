import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const w789Uv20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('w789-uv-2023-3')
    .sku('w789-uv-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(4620000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default w789Uv20233;
