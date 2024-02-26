import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pneumaticTire3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pneumatic-tire-3')
    .sku('pneumatic-tire')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(50000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pneumaticTire3;
