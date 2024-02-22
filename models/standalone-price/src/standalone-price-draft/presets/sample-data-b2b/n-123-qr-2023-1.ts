import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const n123Qr20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('n123-qr-2023-1')
    .sku('n123-qr-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1056000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default n123Qr20231;
