import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const oo789Uv20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('oo789-uv-2015-2')
    .sku('oo789-uv-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2475000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default oo789Uv20152;
