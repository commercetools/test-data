import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ddd890OpGreen3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ddd890-op-green-3')
    .sku('ddd890-op-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(11550000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ddd890OpGreen3;
