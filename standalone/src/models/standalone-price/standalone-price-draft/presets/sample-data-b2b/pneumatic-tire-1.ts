import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pneumaticTire1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pneumatic-tire-1')
    .sku('pneumatic-tire')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(50000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pneumaticTire1;
