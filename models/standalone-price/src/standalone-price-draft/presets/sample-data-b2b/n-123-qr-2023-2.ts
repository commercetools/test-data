import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const n123Qr20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('n123-qr-2023-2')
    .sku('n123-qr-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(968001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default n123Qr20232;
