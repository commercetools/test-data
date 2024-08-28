import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const mm123Qr20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('mm123-qr-2019-2')
    .sku('mm123-qr-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1980000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default mm123Qr20192;
