import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const fff456StRed4 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('fff456-st-red-4')
    .sku('fff456-st-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(6500000))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default fff456StRed4;
