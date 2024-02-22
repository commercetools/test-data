import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const r123Ts20153 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('r123-ts-2015-3')
    .sku('r123-ts-2015')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1254000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default r123Ts20153;
