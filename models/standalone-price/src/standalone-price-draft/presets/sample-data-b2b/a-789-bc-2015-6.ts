import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const a789Bc20156 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('a789-bc-2015-6')
    .sku('a789-bc-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1000000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default a789Bc20156;
