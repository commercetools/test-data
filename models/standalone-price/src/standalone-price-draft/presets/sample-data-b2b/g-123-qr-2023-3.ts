import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const g123Qr20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('g123-qr-2023-3')
    .sku('g123-qr-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1540000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default g123Qr20233;
