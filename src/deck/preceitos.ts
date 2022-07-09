export interface Preceito {
    num: string
    title: string;
}

export const preceitos: Preceito[] = [
    { num: '01', title: `O outro em primeiro lugar. ` },
    { num: '02', title: `Se em toda a existência o CVV salvar uma vida, o trabalho se justifica. ` },
    { num: '03', title: `Lutar pela vida ainda é o melhor. ` },
    { num: '04', title: `A fé sem obras é morta. ` },
    { num: '05', title: `Obrigar-se a fazer é disciplina. Sem ela nada conseguiremos. ` },
    { num: '06', title: `Não faça para agradar. ` },
    { num: '07', title: `Se não veio para ajudar, não atrapalhe. ` },
    { num: '08', title: `Todo trabalho deve ser feito com seriedade e responsabilidade. ` },
    { num: '09', title: `O ideal é mais importante que o personalismo dos voluntários. ` },
    { num: '10', title: `Saber fazer sem dizer ou mostrar que se sabe, comportando-se discreta e confiantemente. ` },
    { num: '11', title: `Comentar o mal é dar força a ele. ` },
    { num: '12', title: `Concedei-nos Senhor, a serenidade para aceitar as coisas que não podemos modificar, coragem para modificar as que podemos, e sabedoria para distinguir umas das outras. ` },
    { num: '13', title: `Durante o plantão o voluntário fica em disponibilidade para salvar vidas. ` },
    { num: '14', title: `Durante o plantão o voluntário usa o tempo somente para os interesses do plantão. ` },
    { num: '15', title: `Só é admitida recusa de atendimento quando a segurança do voluntário é comprometida. ` },
    { num: '16', title: `O serviço é gratuito. Como voluntários não fazemos mais que a obrigação. ` },
    { num: '17', title: `O grupo é mais importante que o personalismo dos voluntários. ` },
    { num: '18', title: `A participação é aberta a todos que queiram colaborar desinteressadamente. ` },
    { num: '19', title: `Para tornar-se voluntário é preciso participar de um curso de seleção. ` },
    { num: '20', title: `No trabalho em grupo não se muda por mudar, especialmente se o trabalho está correto e feito com esforço. ` },
    { num: '21', title: `No grupo mudanças aleatórias e consecutivas desestabilizam. ` },
    { num: '22', title: `As regras são iguais para todos. ` },
    { num: '23', title: `Ninguém fiscaliza o trabalho individual dos voluntários. Existe a confiança que cada um esteja fazendo o melhor. ` },
    { num: '24', title: `Todos os plantonistas são voluntários. ` },
    { num: '25', title: `É possível ser um participante sem cargo, mas sempre com algum encargo. ` },
    { num: '26', title: `É mais eficiente estudar e programar em grupos pequenos. ` },
    { num: '27', title: `Os planos de ação têm que ser atribuídos a pessoas ou grupos de trabalho mas cobrados só de uma pessoa. ` },
    { num: '28', title: `Quem dá a idéia é alguém que tem o potencial de fazer mais e melhor. ` },
    { num: '29', title: `Para fazer o bem é preciso organizar. ` },
    { num: '30', title: `Para realizar um plano de ação é preciso ter controles, cobranças e cooperação. ` },
    { num: '31', title: `Os “mais velhos”, aqueles que assumem e testemunham, são os que coordenam. ` },
    { num: '32', title: `Os “mais velhos” são aqueles que assumem trabalho e encargos e praticam estes princípios. ` },
    { num: '33', title: `O coordenador de grupo, posto ou regional, representa e facilita o grupo e tem seu voto de confiança, assim pode cobrar e ser cobrado. ` },
    { num: '34', title: `O coordenador não pode ser teórico, inativo ou indiferente. ` },
    { num: '35', title: `O personalismo, a politicagem e o melindre geram brigas, rupturas e separações; minam com o trabalho e não podem ser aceitos internamente.(Não há registro de briga entre os “mais velhos”). ` },
    { num: '36', title: `O voluntário que agiu de má fé não está em condições de continuar. ` },
    { num: '37', title: `No trabalho voluntário não se agradece nem se paga ao voluntário pela sua participação. ` },
    { num: '38', title: `Quem não está de acordo com a sistemática do trabalho deve procurar outro. ` },
    { num: '39', title: `Ninguém é insubstituível, todos são importantes. ` },
    { num: '40', title: `Confraternizar para melhor servir. ` },
    { num: '41', title: `Treinar para melhor servir. ` },
    { num: '42', title: `A relação de ajuda se baseia na aceitação, compreensão, respeito e comunicação. ` },
    { num: '43', title: `Para fazer bem é indispensável se preparar, entrando em sintonia espiritual com o trabalho. ` },
    { num: '44', title: `Um dos esforços constantes para manter o trabalho vivo é a comunicação. ` },
    { num: '45', title: `Uma das características do voluntário é a capacidade de renunciar. ` },
    { num: '46', title: `“Se todos fizerem o que estou fazendo, como ficarão as coisas no Posto?”. ` },
    { num: '47', title: `Quando o trabalhador está pronto o serviço aparece. ` },
    { num: '48', title: `Manter-se sempre no trabalho. Quem se afasta dificilmente retorna, ` },
    { num: '49', title: `O voluntário paga para trabalhar. ` },
    { num: '50', title: `Preguiça não. Trabalhar! Trabalhar! Trabalhar! ` },
    { num: '51', title: `O sigilo é a base do trabalho. ` },
    { num: '52', title: `O CVV não é um clube de amigos. ` },
].map((item, index) => {
    let num = String(index + 1)
    if (num.length === 1) num = '0' + num;
    if (num !== item.num) {
        console.error(item.num, num)
    }
    return item
})
