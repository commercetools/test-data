import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pinAndBushingKit7 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pin-and-bushing-kit-7')
    .sku('pin-and-bushing-kit')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(32500))
    .country('US')
    .channel(KeyReferenceDraft.presets.channel().key('us-medium-customers'))
    .active(true);

export default pinAndBushingKit7;
