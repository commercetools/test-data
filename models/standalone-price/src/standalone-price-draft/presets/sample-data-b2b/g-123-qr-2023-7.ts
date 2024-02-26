import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const g123Qr20237 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('g123-qr-2023-7')
    .sku('g123-qr-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1200000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default g123Qr20237;
