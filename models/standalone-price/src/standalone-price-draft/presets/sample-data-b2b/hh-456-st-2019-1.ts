import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hh456St20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hh456-st-2019-1')
    .sku('hh456-st-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2420000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hh456St20191;
