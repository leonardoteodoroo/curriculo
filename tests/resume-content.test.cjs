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
const heroCss = fs.readFileSync(
  "src/components/sections/Hero.module.css",
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
    "styles.identityHeader",
    "styles.inlinePortraitWrap",
  ]);
});

test("hero mobile styles keep portrait framing and title scale refined", () => {
  includesAll(heroCss, [
    "@media (max-width: 480px)",
    "grid-template-columns: minmax(0, 1fr) 82px;",
    "max-width: 82px;",
    "object-position: center 10%;",
    "font-size: clamp(1.92rem, 9.3vw, 2.76rem);",
    "line-height: 0.94;",
  ]);
});

test("experience section keeps original formation and background information", () => {
  includesAll(experience, [
    "curso trancado",
    "Ensino médio completo",
    "Programação em C++",
    "Word, PowerPoint, Excel",
    "Disponibilidade de horário",
    "CIA DE PROCESSAMENTO DE DADOS DO MUNICIPIO DE GOIANIA",
    "FAST SHOP S.A",
    "YELLOW SOLUCOES DE MOBILIDADE LTDA",
    "METROBUS TRANSPORTE COLETIVO S/A",
    "Auxiliar de escritorio em geral",
    "BRASIL TELECOM CALL CENTER S/A - EM RECUPERACAO JUDICIAL",
    "Operador de telemarketing ativo",
    "COMDATA",
    "SESI",
  ]);
  assert.equal(experience.includes("ATENTO BRASIL S/A"), false);
  assert.equal(experience.includes("LOJAS RIACHUELO"), false);
});

test("project showcase highlights live domains instead of placeholder previews", () => {
  includesAll(showcase, [
    "curriculo.semprenamoda.com.br",
    "leonardoteodoroo/curriculo",
    "curso-nail-designer.semprenamoda.com.br",
    "aliciaties.semprenamoda.com.br",
    "studioellas.semprenamoda.com.br",
    "laurapaula.semprenamoda.com.br",
    "advanced-amino-formula.semprenamoda.com.br",
    "verification.semprenamoda.com.br",
    "lpteste.semprenamoda.com.br",
    "calistenia-sob-medida-28-dias.semprenamoda.com.br",
    "Abrir dominio",
  ]);
  assert.equal(showcase.includes("Preview em atualização"), false);
  assert.equal(showcase.includes("Substituir screenshot"), false);
  assert.equal(
    showcase.includes("<img"),
    false,
    "Expected text-based project cards instead of img tags",
  );
});
