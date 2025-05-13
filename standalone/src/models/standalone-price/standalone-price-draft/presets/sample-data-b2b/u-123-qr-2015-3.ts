import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const u123Qr20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('u123-qr-2015-3')
    .sku('u123-qr-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2376000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default u123Qr20153;
