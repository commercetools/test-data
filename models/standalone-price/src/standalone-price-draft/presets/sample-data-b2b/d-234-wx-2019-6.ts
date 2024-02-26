import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const d234Wx20196 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('d234-wx-2019-6')
    .sku('d234-wx-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(720000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default d234Wx20196;
