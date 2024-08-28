import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const i789Uv20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('i789-uv-2019-1')
    .sku('i789-uv-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1694001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default i789Uv20191;
