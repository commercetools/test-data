import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const x456Yz20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('x456-yz-2015-2')
    .sku('x456-yz-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1089000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default x456Yz20152;
