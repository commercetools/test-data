import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const p234Qw20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('p234-qw-2023-2')
    .sku('p234-qw-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1028501))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default p234Qw20232;
