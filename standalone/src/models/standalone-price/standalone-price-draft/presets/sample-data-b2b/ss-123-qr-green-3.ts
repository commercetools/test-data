import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ss123QrGreen3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ss123-qr-green-3')
    .sku('ss123-qr-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5390000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ss123QrGreen3;
