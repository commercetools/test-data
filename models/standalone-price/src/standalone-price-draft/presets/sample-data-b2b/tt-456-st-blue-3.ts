import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const tt456StBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('tt456-st-blue-3')
    .sku('tt456-st-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(4290000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default tt456StBlue3;
