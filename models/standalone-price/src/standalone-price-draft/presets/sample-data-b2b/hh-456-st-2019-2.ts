import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hh456St20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hh456-st-2019-2')
    .sku('hh456-st-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2200000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hh456St20192;
