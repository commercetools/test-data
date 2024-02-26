import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const mm123Qr20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('mm123-qr-2015-3')
    .sku('mm123-qr-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2376000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default mm123Qr20153;
