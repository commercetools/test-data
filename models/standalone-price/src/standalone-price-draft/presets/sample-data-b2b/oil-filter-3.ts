import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const oilFilter3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('oil-filter-3')
    .sku('oil-filter')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2750))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default oilFilter3;
