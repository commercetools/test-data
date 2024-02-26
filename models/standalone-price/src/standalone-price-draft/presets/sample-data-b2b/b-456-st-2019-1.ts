import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const b456St20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('b456-st-2019-1')
    .sku('b456-st-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(1149501))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default b456St20191;
