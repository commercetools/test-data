import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const i789Uv20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('i789-uv-2019-3')
    .sku('i789-uv-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2002000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default i789Uv20193;
