import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const tt456StRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('tt456-st-red-2')
    .sku('tt456-st-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2970000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default tt456StRed2;
