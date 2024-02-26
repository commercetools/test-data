import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const oilFilter7 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('oil-filter-7')
    .sku('oil-filter')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2750))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default oilFilter7;
