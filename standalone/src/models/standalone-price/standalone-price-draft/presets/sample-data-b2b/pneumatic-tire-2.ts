import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pneumaticTire2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pneumatic-tire-2')
    .sku('pneumatic-tire')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(50000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pneumaticTire2;
