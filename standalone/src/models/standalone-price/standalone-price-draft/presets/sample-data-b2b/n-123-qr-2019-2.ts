import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const n123Qr20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('n123-qr-2019-2')
    .sku('n123-qr-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(880000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default n123Qr20192;
