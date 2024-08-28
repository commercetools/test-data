import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const y567Yz20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('y567-yz-2023-2')
    .sku('y567-yz-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2783000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default y567Yz20232;
