import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const eee123QrGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('eee123-qr-green-1')
    .sku('eee123-qr-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(6600000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default eee123QrGreen1;
