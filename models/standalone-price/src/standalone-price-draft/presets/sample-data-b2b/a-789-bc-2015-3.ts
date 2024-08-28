import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const a789Bc20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('a789-bc-2015-3')
    .sku('a789-bc-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1650000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default a789Bc20153;
