import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const c789Uv20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('c789-uv-2015-1')
    .sku('c789-uv-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1320000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default c789Uv20151;
