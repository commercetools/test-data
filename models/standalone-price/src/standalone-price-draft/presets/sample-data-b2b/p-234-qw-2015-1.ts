import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const p234Qw20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('p234-qw-2015-1')
    .sku('p234-qw-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(935000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default p234Qw20151;
