import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const aaa789UvGreen3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('aaa789-uv-green-3')
    .sku('aaa789-uv-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(6930000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default aaa789UvGreen3;
