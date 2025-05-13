import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ss123QrBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ss123-qr-blue-2')
    .sku('ss123-qr-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3850000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ss123QrBlue2;
