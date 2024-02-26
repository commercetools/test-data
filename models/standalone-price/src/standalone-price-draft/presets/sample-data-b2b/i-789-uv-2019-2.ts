import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const i789Uv20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('i789-uv-2019-2')
    .sku('i789-uv-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1540000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default i789Uv20192;
