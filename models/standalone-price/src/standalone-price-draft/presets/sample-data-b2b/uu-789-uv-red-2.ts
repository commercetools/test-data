import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const uu789UvRed2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('uu789-uv-red-2')
    .sku('uu789-uv-red')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2475000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default uu789UvRed2;
