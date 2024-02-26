import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ledWorkLight7 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('led-work-light-7')
    .sku('led-work-light')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(10000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default ledWorkLight7;
