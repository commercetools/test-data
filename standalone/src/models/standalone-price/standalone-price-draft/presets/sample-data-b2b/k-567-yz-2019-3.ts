import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const k567Yz20193 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('k567-yz-2019-3')
    .sku('k567-yz-2019')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1859000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default k567Yz20193;
