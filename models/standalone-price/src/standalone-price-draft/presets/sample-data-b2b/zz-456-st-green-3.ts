import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const zz456StGreen3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('zz456-st-green-3')
    .sku('zz456-st-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5390000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default zz456StGreen3;
