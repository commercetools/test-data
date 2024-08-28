import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const zz456StBlue1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('zz456-st-blue-1')
    .sku('zz456-st-blue')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(4235001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default zz456StBlue1;
