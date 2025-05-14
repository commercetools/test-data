import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const eee123QrRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('eee123-qr-red-2')
    .sku('eee123-qr-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(4950000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default eee123QrRed2;
