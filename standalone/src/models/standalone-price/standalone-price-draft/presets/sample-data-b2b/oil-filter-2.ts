import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const oilFilter2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('oil-filter-2')
    .sku('oil-filter')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2750))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default oilFilter2;
