import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const gg123Qr20238 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('gg123-qr-2023-8')
    .sku('gg123-qr-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1870001))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default gg123Qr20238;
