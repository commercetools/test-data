import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const k567Yz20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('k567-yz-2023-3')
    .sku('k567-yz-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(2002000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default k567Yz20233;
