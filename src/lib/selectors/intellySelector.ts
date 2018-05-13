import { Iconv } from 'iconv'

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
    }
}

const extract = (name: string, document: Document) => {
    var ic = new Iconv('iso-8859-1', 'utf-8');
    var buf = ic.convert(
        (document.getElementsByName(name)[0] as HTMLInputElement).value
    )
    return buf.toString('utf-8')
}