import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const s567Uv20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('s567-uv-2015-3')
    .sku('s567-uv-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1254000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default s567Uv20153;
