import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const c789Uv20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('c789-uv-2023-3')
    .sku('c789-uv-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1848000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default c789Uv20233;
