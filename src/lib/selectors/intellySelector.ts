export const getResumeData = (document: Document) => {
  return {
    cargo1_id: extract("candidato_cargo1_id", document),
    cargo2_id: extract("candidato_cargo2_id", document),
    cargo3_id: extract("candidato_cargo3_id", document),
    celular: extract("candidato_celular", document),
    contratacao1: extract("candidato_contratacao1", document),
    contratacao2: extract("candidato_contratacao2", document),
    cursoextra: extract("candidato_cursoextra", document),
    ddcelular: extract("candidato_ddcelular", document),
    ddfone: extract("candidato_ddfone", document),
    email: extract("candidato_email", document),
    endereco: extract("candidato_endereco", document),
    estcivil: extract("candidato_estcivil", document),
    experiencia: extract("candidato_experiencia", document),
    experiencias: extractExperiences(document),
    fluencia1: extract("candidato_fluencia1", document),
    fluencia2: extract("candidato_fluencia2", document),
    formacao: extract("candidato_formacao", document),
    habilidades: extract("candidato_habilidades", document),
    idioma1: extract("candidato_idioma1", document),
    idioma2: extract("candidato_idioma2", document),
    nascimento: extract("candidato_nascimento", document),
    nome: extract("candidato_nome", document),
    pretensao1: extract("candidato_pretensao1", document),
    pretensao2: extract("candidato_pretensao2", document),
    qtd_filhos: extract("candidato_qtd_filhos", document),
    sexo: extract("candidato_sexo", document),
    telefone: extract("candidato_telefone", document),
    ultimosalario: extract("candidato_ultimosalario", document),
    vlrhora1: extract("candidato_vlrhora1", document),
    vlrhora2: extract("candidato_vlrhora2", document),
  };
};

const extract = (name: string, document: Document) => {
  return (document.getElementsByName(name)[0] as HTMLInputElement).value;
};

const extractExperiences = (document: Document) => {
  const trExperiences = Array.from(
    (document.getElementById("experiencias") as HTMLElement)
    .children[0]
    .children,
  );
  return trExperiences.map((tr: Element) => {
    const rows = tr.children[0].children[0].children[0].children;
    return {
      activities: (rows[9].children[1].children[0] as HTMLInputElement).value,
      city: (rows[4].children[1].children[0] as HTMLInputElement).value,
      company: (rows[1].children[1].children[0] as HTMLInputElement).value,
      country: (rows[2].children[1].children[0] as HTMLInputElement).value,
      currentJob: (rows[8].querySelector("input[type=checkbox]") as HTMLInputElement).checked,
      endDate: (rows[8].querySelector("input[type=text]") as HTMLInputElement).value,
      expType: (rows[0].children[1].children[0] as HTMLSelectElement).value,
      startDate: (rows[7].querySelector("input") as HTMLInputElement).value,
      state: (rows[3].children[1].children[0] as HTMLInputElement).value,
    };
  });
};