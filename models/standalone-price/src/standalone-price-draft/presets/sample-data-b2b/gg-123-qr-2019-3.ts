import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const gg123Qr20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('gg123-qr-2019-3')
    .sku('gg123-qr-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2431000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default gg123Qr20193;
