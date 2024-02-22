import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jjj890OpRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jjj890-op-red-1')
    .sku('jjj890-op-red')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(9900000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default jjj890OpRed1;
