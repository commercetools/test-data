import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const eee123QrGreen3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('eee123-qr-green-3')
    .sku('eee123-qr-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(7700000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default eee123QrGreen3;
