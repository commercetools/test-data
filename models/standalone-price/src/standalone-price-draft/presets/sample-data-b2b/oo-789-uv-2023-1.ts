import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const oo789Uv20231 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('oo789-uv-2023-1')
    .sku('oo789-uv-2023')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(3300000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default oo789Uv20231;
