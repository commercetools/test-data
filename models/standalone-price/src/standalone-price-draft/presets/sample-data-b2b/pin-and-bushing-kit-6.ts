import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pinAndBushingKit6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pin-and-bushing-kit-6')
    .sku('pin-and-bushing-kit')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(32500))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default pinAndBushingKit6;
