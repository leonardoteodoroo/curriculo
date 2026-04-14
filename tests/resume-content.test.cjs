const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const hero = fs.readFileSync("src/components/sections/Hero.tsx", "utf8");
const experience = fs.readFileSync(
  "src/components/sections/Experience.tsx",
  "utf8",
);
const showcase = fs.readFileSync(
  "src/components/sections/ProjectShowcase.tsx",
  "utf8",
);

function includesAll(text, snippets) {
  for (const snippet of snippets) {
    assert.ok(text.includes(snippet), `Expected to find snippet: ${snippet}`);
  }
}

test("hero preserves core contact and candidate identity data", () => {
  includesAll(hero, [
    "Leonardo Teodoro Laureano",
    "(62) 9 9991-8702",
    "lauteodor@gmail.com",
    "Jardim Goiás",
    "33 anos",
    "Web Designer",
  ]);
});

test("experience section keeps original formation and background information", () => {
  includesAll(experience, [
    "curso trancado",
    "Ensino médio completo",
    "Programação em C++",
    "Word, PowerPoint, Excel",
    "Disponibilidade de horário",
    "Bt Call Center",
    "Metrobus",
    "FastShop",
    "COMDATA",
    "YELLOW",
    "SESI",
  ]);
});

test("project showcase uses placeholders instead of real preview photos", () => {
  includesAll(showcase, [
    "placeholderLabel",
    "Preview em atualização",
    "Substituir screenshot",
  ]);
  assert.equal(
    showcase.includes("<img"),
    false,
    "Expected placeholders instead of img tags",
  );
});
