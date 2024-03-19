import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const taperedRollerBearing6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('tapered-roller-bearing-6')
    .sku('tapered-roller-bearing')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(20000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default taperedRollerBearing6;
