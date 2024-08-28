import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const xx890OpBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('xx890-op-blue-2')
    .sku('xx890-op-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(5500000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default xx890OpBlue2;
