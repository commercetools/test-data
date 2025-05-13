import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const u123Qr20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('u123-qr-2019-1')
    .sku('u123-qr-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2178001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default u123Qr20191;
