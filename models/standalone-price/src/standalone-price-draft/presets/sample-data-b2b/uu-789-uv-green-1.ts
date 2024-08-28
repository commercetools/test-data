import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const uu789UvGreen1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('uu789-uv-green-1')
    .sku('uu789-uv-green')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3300000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default uu789UvGreen1;
