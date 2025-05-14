import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-blue-3')
    .sku('yy123-qr-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(8580000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default yy123QrBlue3;
