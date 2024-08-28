import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const w789Uv20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('w789-uv-2015-2')
    .sku('w789-uv-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2970000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default w789Uv20152;
