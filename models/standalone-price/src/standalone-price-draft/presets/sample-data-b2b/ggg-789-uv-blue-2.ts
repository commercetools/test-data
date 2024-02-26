import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ggg789UvBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ggg789-uv-blue-2')
    .sku('ggg789-uv-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(8250000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ggg789UvBlue2;
