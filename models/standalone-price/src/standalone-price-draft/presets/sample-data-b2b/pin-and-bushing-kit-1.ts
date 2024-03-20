import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pinAndBushingKit1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pin-and-bushing-kit-1')
    .sku('pin-and-bushing-kit')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(32500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pinAndBushingKit1;
