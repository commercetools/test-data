import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aa123Qr20197 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aa123-qr-2019-7')
    .sku('aa123-qr-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1440000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default aa123Qr20197;
