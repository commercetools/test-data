import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const z890Op20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('z890-op-2023-1')
    .sku('z890-op-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3564000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default z890Op20231;
