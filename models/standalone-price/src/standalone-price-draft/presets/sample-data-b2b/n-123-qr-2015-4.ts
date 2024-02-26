import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const n123Qr20154 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('n123-qr-2015-4')
    .sku('n123-qr-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(800000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default n123Qr20154;
