import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const u123Qr20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('u123-qr-2019-3')
    .sku('u123-qr-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2574000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default u123Qr20193;
