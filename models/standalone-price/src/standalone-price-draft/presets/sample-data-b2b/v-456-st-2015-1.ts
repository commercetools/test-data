import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const v456St20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('v456-st-2015-1')
    .sku('v456-st-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2750000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default v456St20151;
