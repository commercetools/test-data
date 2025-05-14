import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-green-2')
    .sku('yy123-qr-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(7260001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default yy123QrGreen2;
