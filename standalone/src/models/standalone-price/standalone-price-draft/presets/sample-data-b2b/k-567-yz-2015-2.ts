import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const k567Yz20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('k567-yz-2015-2')
    .sku('k567-yz-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1287000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default k567Yz20152;
