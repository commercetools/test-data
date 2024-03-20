import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pinAndBushingKit3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pin-and-bushing-kit-3')
    .sku('pin-and-bushing-kit')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(32500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pinAndBushingKit3;
