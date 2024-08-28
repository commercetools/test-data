import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const mm123Qr20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('mm123-qr-2023-3')
    .sku('mm123-qr-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2772000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default mm123Qr20233;
