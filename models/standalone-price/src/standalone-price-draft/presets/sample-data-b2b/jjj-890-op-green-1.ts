import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jjj890OpGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jjj890-op-green-1')
    .sku('jjj890-op-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(11880000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default jjj890OpGreen1;
