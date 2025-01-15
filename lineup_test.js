import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { getStarters } from "./createLineup.js";
import lineups from './lineups.json' with {type: 'json'};

Deno.test('return the starting line up', () => {
  const sampleData = lineups.lineup;
  const expectedOutput = `Sergio Busquets i Burgos
Jordi Alba Ramos
Gerard Piqué Bernabéu
Luis Alberto Suárez Díaz
Ivan Rakitić
Ousmane Dembélé
Samuel Yves Umtiti
Lionel Andrés Messi Cuccittini
Nélson Cabral Semedo
Sergi Roberto Carnicer
Marc-André ter Stegen`;

  assertEquals(getStarters.call(sampleData), expectedOutput);
});