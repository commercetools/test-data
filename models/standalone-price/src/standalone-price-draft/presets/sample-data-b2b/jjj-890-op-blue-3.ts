import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const jjj890OpBlue3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('jjj890-op-blue-3')
    .sku('jjj890-op-blue')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(12870000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default jjj890OpBlue3;
