import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const mm123Qr20238 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('mm123-qr-2023-8')
    .sku('mm123-qr-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1980001))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default mm123Qr20238;
