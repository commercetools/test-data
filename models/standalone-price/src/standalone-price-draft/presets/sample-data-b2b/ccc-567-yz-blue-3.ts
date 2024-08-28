import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ccc567YzBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ccc567-yz-blue-3')
    .sku('ccc567-yz-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(12870000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ccc567YzBlue3;
