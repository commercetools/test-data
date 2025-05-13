import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const gg123Qr20157 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('gg123-qr-2015-7')
    .sku('gg123-qr-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2040000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default gg123Qr20157;
