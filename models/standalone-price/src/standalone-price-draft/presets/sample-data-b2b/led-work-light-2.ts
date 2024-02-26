import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ledWorkLight2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('led-work-light-2')
    .sku('led-work-light')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(10000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ledWorkLight2;
