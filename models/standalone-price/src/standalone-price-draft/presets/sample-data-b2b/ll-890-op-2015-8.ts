import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ll890Op20158 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ll890-op-2015-8')
    .sku('ll890-op-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3850001))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default ll890Op20158;
