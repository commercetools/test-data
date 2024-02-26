import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import dumpTrucks from './dump-trucks';

const dumpTrucksCategory = dumpTrucks().build<TCategoryDraft>();

const offHighwayDumpTrucks = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kipper für den Offroad-Einsatz')
        ['it-IT']('Camion Ribaltabili Fuoristrada')
        ['nl-NL']('Off-road Kipwagens')
        ['fr-FR']('Camions-bennes tout-terrain')
        ['en-AU']('Off-Highway Dump Trucks')
        ['es-ES']('Camiones volquete todo terreno')
        ['en-GB']('Off-Highway Dump Trucks')
        ['en-NZ']('Off-Highway Dump Trucks')
        ['pt-PT']('Caminhões Basculantes Fora de Estrada')
        ['en-US']('Off-Highway Dump Trucks')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('offroad_kipper')
        ['it-IT']('off_highway_dump_trucks')
        ['nl-NL']('off_highway_dump_trucks')
        ['fr-FR']('camions_bennes_tout-terrain')
        ['en-AU']('off_highway_dump_trucks')
        ['es-ES']('camiones_volquete_todo_terreno')
        ['en-GB']('off_highway_dump_trucks')
        ['en-NZ']('off_highway_dump_trucks')
        ['pt-PT']('off_highway_dump_trucks')
        ['en-US']('off_highway_dump_trucks')
    )
    .key('off-highway-dump-trucks')
    .orderHint('0.000017083829456541934993986')
    .parent(KeyReferenceDraft.presets.category().key(dumpTrucksCategory.key!));

export default offHighwayDumpTrucks;
