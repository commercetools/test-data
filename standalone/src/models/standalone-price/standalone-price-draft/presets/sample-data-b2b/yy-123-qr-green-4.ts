import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrGreen4 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-green-4')
    .sku('yy123-qr-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(6000000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default yy123QrGreen4;
