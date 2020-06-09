export class Confirmados {
    total: String = '';
    titulo: String = '';
    novos: Number;
    incidencia: String;
    recuperados: Number;
    acompanhamento: String;
    percent: String;
}

export class Obitos {
    total: String;
    titulo: String;
    novos: Number;
    incidencia: String;
    letalidade: String;
    mortalidade: String;
    percent: String;

}

export class Dados {
    confirmados: Confirmados;
    obitos: Obitos;

}