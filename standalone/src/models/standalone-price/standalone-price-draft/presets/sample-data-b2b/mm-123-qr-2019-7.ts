import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const mm123Qr20197 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('mm123-qr-2019-7')
    .sku('mm123-qr-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2160000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default mm123Qr20197;
