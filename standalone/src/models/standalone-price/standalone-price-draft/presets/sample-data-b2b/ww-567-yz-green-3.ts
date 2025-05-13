import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ww567YzGreen3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ww567-yz-green-3')
    .sku('ww567-yz-green')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(6930000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ww567YzGreen3;
