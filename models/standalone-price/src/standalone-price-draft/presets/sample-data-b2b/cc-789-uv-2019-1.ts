import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const cc789Uv20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('cc789-uv-2019-1')
    .sku('cc789-uv-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2662000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default cc789Uv20191;
