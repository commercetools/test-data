import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const yy123QrBlue8 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('yy123-qr-blue-8')
    .sku('yy123-qr-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(6600001))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default yy123QrBlue8;
