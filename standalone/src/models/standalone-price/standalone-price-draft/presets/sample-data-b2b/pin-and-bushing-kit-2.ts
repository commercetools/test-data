import {
  KeyReferenceDraft,
  MoneyDraft,
} from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pinAndBushingKit2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pin-and-bushing-kit-2')
    .sku('pin-and-bushing-kit')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(32500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default pinAndBushingKit2;
