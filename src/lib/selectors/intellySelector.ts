// import { Iconv } from 'iconv'

export const getResumeData = (document: Document) => {
    return {
        nome: extract('candidato_nome', document),
        email: extract('candidato_email', document),
        nascimento: extract('candidato_nascimento', document),
        estcivil: extract('candidato_estcivil', document),
        sexo: extract('candidato_sexo', document),
        qtd_filhos: extract('candidato_qtd_filhos', document),
        endereco: extract('candidato_endereco', document),
        ddfone: extract('candidato_ddfone', document),
        telefone: extract('candidato_telefone', document),
        ddcelular: extract('candidato_ddcelular', document),
        celular: extract('candidato_celular', document),
        experiencia: extract('candidato_experiencia', document),
        ultimosalario: extract('candidato_ultimosalario', document),
        formacao: extract('candidato_formacao', document),
        habilidades: extract('candidato_habilidades', document),
        cursoextra: extract('candidato_cursoextra', document),
        contratacao1: extract('candidato_contratacao1', document),
        pretensao1: extract('candidato_pretensao1', document),
        vlrhora1: extract('candidato_vlrhora1', document),
        contratacao2: extract('candidato_contratacao2', document),
        pretensao2: extract('candidato_pretensao2', document),
        vlrhora2: extract('candidato_vlrhora2', document),
        cargo1_id: extract('candidato_cargo1_id', document),
        cargo2_id: extract('candidato_cargo2_id', document),
        cargo3_id: extract('candidato_cargo3_id', document),
        idioma1: extract('candidato_idioma1', document),
        fluencia1: extract('candidato_fluencia1', document),
        idioma2: extract('candidato_idioma2', document),
        fluencia2: extract('candidato_fluencia2', document),
        experiencias: extractExperiences(document),
    }
}

const extract = (name: string, document: Document) => {
    // var ic = new Iconv('latin1', 'UTF-8');
    // var buf = ic.convert(
    //     new Buffer((document.getElementsByName(name)[0] as HTMLInputElement).value, 'binary')
    // )
    // return buf.toString('utf-8')
    return (document.getElementsByName(name)[0] as HTMLInputElement).value
}

const extractExperiences = (document: Document) => {
    const trExperiences =  Array.from(
        (document.getElementById('experiencias') as HTMLElement)
        .children[0]
        .children
    )
    return trExperiences.map((tr: Element) => {
        const rows = tr.children[0].children[0].children[0].children
        return {
            expType: (rows[0].children[1].children[0] as HTMLSelectElement).value,
            company: (rows[1].children[1].children[0] as HTMLInputElement).value,
            country: (rows[2].children[1].children[0] as HTMLInputElement).value,
            state: (rows[3].children[1].children[0] as HTMLInputElement).value,
            city: (rows[4].children[1].children[0] as HTMLInputElement).value,
            startDate: (rows[7].children[1].children[0] as HTMLInputElement).value,
            endDate: (rows[8].children[1].children[0] as HTMLInputElement).value,
        }
    })
}