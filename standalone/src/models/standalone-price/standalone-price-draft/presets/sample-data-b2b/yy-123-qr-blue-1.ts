import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrBlue1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-blue-1')
    .sku('yy123-qr-blue')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(7260001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default yy123QrBlue1;
