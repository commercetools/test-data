import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ledWorkLight3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('led-work-light-3')
    .sku('led-work-light')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(10000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ledWorkLight3;
