import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const eee123QrBlue5 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('eee123-qr-blue-5')
    .sku('eee123-qr-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4500000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default eee123QrBlue5;
