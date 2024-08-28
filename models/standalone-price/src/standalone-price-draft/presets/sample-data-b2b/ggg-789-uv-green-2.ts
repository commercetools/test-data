import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ggg789UvGreen2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ggg789-uv-green-2')
    .sku('ggg789-uv-green')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(9075001))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ggg789UvGreen2;
