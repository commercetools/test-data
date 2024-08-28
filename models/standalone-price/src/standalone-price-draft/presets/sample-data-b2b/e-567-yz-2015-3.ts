import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const e567Yz20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('e567-yz-2015-3')
    .sku('e567-yz-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1452000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default e567Yz20153;
