import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ccc567YzRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ccc567-yz-red-2')
    .sku('ccc567-yz-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(8910000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ccc567YzRed2;
