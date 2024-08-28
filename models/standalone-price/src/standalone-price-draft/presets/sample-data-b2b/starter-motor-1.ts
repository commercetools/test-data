import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const starterMotor1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('starter-motor-1')
    .sku('starter-motor')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(20000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default starterMotor1;
