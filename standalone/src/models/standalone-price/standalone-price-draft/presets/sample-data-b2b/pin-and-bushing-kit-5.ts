import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const pinAndBushingKit5 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('pin-and-bushing-kit-5')
    .sku('pin-and-bushing-kit')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(32500))
    .channel(KeyReferenceDraft.presets.channel().key('de-fr-uk'))
    .active(true);

export default pinAndBushingKit5;
