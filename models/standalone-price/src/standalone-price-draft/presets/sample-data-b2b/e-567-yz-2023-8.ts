import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const e567Yz20238 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('e567-yz-2023-8')
    .sku('e567-yz-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1210000))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-large-customers'))
    .active(true);

export default e567Yz20238;
