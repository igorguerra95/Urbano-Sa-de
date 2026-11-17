export type SpecialtyCategory = 'todas' | 'saude-mental' | 'clinica-medica';

export interface SpecialtyItem {
  id: string;
  index: string;
  name: string;
  category: Exclude<SpecialtyCategory, 'todas'>;
  categoryLabel: string;
  lead: string;
  description: string;
  carePoints: string[];
  featured?: boolean;
}

export interface HeroMetric {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface ClinicPillar {
  index: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const HERO_METRICS: HeroMetric[] = [
  {
    value: 7,
    suffix: '',
    label: 'Especialidades integradas',
    detail: 'Saúde mental e clínica médica conectadas no mesmo cuidado.',
  },
  {
    value: 50,
    suffix: ' min',
    label: 'Tempo médio de escuta',
    detail: 'Consultas estruturadas para acolher sua história sem pressa.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Atendimento humanizado',
    detail: 'Planos terapêuticos claros e construídos junto com você.',
  },
  {
    value: 360,
    suffix: '°',
    label: 'Visão de mente e corpo',
    detail: 'Atenção simultânea ao equilíbrio emocional, metabólico e clínico.',
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'psiquiatria',
    index: '01',
    name: 'Psiquiatria',
    category: 'saude-mental',
    categoryLabel: 'Saúde Mental',
    lead: 'Diagnóstico cuidadoso e condução ética para recuperar sua estabilidade emocional.',
    description:
      'Avaliação psiquiátrica acolhedora para ansiedade, depressão, transtornos do sono, estresse crônico e esgotamento, com acompanhamento próximo e decisões compartilhadas.',
    carePoints: [
      'Avaliação clínica completa e sem estigmas',
      'Plano medicamentoso criterioso quando necessário',
      'Comunicação direta com a equipe de psicologia',
    ],
    featured: true,
  },
  {
    id: 'psicologia-terapias',
    index: '02',
    name: 'Psicologia & Terapias',
    category: 'saude-mental',
    categoryLabel: 'Saúde Mental',
    lead: 'Espaço seguro de psicoterapia para compreender emoções e fortalecer vínculos.',
    description:
      'Sessões individuais e abordagens terapêuticas baseadas em evidências para lidar com transições de vida, luto, autoestima, regulação emocional e saúde relacional.',
    carePoints: [
      'Psicoterapia personalizada ao seu momento de vida',
      'Terapias integrativas de foco emocional e cognitivo',
      'Continuidade acolhedora entre sessões',
    ],
    featured: true,
  },
  {
    id: 'endocrinologia',
    index: '03',
    name: 'Endocrinologia',
    category: 'clinica-medica',
    categoryLabel: 'Medicina & Nutrição',
    lead: 'Equilíbrio hormonal e metabólico alinhado à sua vitalidade diária.',
    description:
      'Cuidado especializado para tireoide, metabolismo, resistência insulínica, alterações hormonais e energia vital — aspectos que influenciam diretamente o humor e a disposição.',
    carePoints: [
      'Investigação hormonal detalhada',
      'Manejo metabólico e controle glicêmico',
      'Acompanhamento integrado à nutrição clínica',
    ],
  },
  {
    id: 'cardiologia',
    index: '04',
    name: 'Cardiologia',
    category: 'clinica-medica',
    categoryLabel: 'Medicina & Nutrição',
    lead: 'Prevenção cardiovascular com olhar atento ao ritmo do corpo e ao estresse.',
    description:
      'Avaliação cardiológica preventiva, controle de pressão arterial, check-up completo e cuidado com sintomas ligados à sobrecarga emocional e ao estilo de vida urbano.',
    carePoints: [
      'Check-up cardiovascular preventivo',
      'Controle de hipertensão e fatores de risco',
      'Orientação segura para atividade física',
    ],
  },
  {
    id: 'clinica-geral',
    index: '05',
    name: 'Clínica Geral',
    category: 'clinica-medica',
    categoryLabel: 'Medicina & Nutrição',
    lead: 'Medicina de vínculo para acompanhar sua saúde em todas as fases.',
    description:
      'Consultas de atenção primária para investigação de sintomas gerais, check-ups periódicos, interpretação de exames e coordenação inteligente entre as demais especialidades.',
    carePoints: [
      'Porta de entrada acolhedora para novas queixas',
      'Rastreamento preventivo individualizado',
      'Visão global do seu histórico clínico',
    ],
  },
  {
    id: 'nutricao',
    index: '06',
    name: 'Nutrição Clínica',
    category: 'clinica-medica',
    categoryLabel: 'Medicina & Nutrição',
    lead: 'Relação leve e sustentável com a alimentação, sem restrições punitivas.',
    description:
      'Planejamento alimentar adaptado à sua rotina real, respeitando saúde intestinal, comportamento alimentar, energia cotidiana e suporte clínico às demais áreas.',
    carePoints: [
      'Plano alimentar flexível e possível no dia a dia',
      'Atenção à saúde intestinal e saciedade',
      'Educação nutricional gentil e sem culpa',
    ],
  },
  {
    id: 'pediatria',
    index: '07',
    name: 'Pediatria',
    category: 'clinica-medica',
    categoryLabel: 'Medicina & Nutrição',
    lead: 'Cuidado próximo ao desenvolvimento infantil e orientação serena às famílias.',
    description:
      'Acompanhamento pediátrico do crescimento físico, sono infantil, imunidade e bem-estar socioemocional das crianças, acolhendo dúvidas dos pais com clareza e calma.',
    carePoints: [
      'Puericultura e acompanhamento do desenvolvimento',
      'Orientação em sono, alimentação e imunização',
      'Escuta atenta para mães, pais e cuidadores',
    ],
  },
];

export const CLINIC_PILLARS: ClinicPillar[] = [
  {
    index: '01',
    title: 'Escuta que antecede qualquer conduta',
    description:
      'Acreditamos que ninguém deve se sentir apressado em um consultório. Reservamos tempo real para compreender o contexto da sua vida antes de definir exames ou tratamentos.',
  },
  {
    index: '02',
    title: 'Mente e corpo tratados sem fragmentação',
    description:
      'Ansiedade, cansaço persistente, metabolismo e saúde cardiovascular dialogam entre si. Nossa equipe compartilha conhecimento clínico para oferecer um cuidado verdadeiramente integrado.',
  },
  {
    index: '03',
    title: 'Atmosfera pensada para desacelerar',
    description:
      'Da recepção silenciosa à iluminação suave dos consultórios, cada detalhe da Urbano Saúde foi desenhado para reduzir a tensão e fazer você se sentir amparado.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'primeira-consulta',
    question: 'Como funciona a primeira consulta na Urbano Saúde?',
    answer:
      'Ao enviar sua solicitação pelo formulário de contato, nossa equipe acolhe sua demanda e orienta o agendamento com o profissional mais adequado ao seu momento. No encontro inicial, dedicamos tempo amplo para ouvir sua história, revisar exames anteriores e alinhar os próximos passos com total transparência.',
  },
  {
    id: 'integracao-especialidades',
    question: 'Por que uma clínica com foco em saúde mental também reúne especialidades médicas?',
    answer:
      'Porque saúde emocional e saúde física são inseparáveis. Alterações na tireoide, deficiências nutricionais, distúrbios do sono ou sobrecarga cardiovascular frequentemente se entrelaçam com quadros de ansiedade, fadiga e humor. Ter psiquiatria, psicologia, endocrinologia, cardiologia, clínica geral, nutrição e pediatria no mesmo espaço evita diagnósticos isolados.',
  },
  {
    id: 'nao-sei-especialidade',
    question: 'E se eu não souber exatamente qual especialidade procurar primeiro?',
    answer:
      'Não há problema algum. Você pode selecionar "Orientação inicial" no formulário de contato e contar brevemente o que está sentindo. Nossa equipe auxilia a identificar se o melhor ponto de partida é a Clínica Geral, a Psiquiatria, a Psicologia ou outra especialidade.',
  },
  {
    id: 'preparo-consulta',
    question: 'Preciso levar exames ou encaminhamento médico para agendar?',
    answer:
      'Não é obrigatório ter encaminhamento prévio. Caso possua exames laboratoriais recentes, receitas em uso ou relatórios anteriores, trazê-los ajuda o profissional a construir uma visão mais completa já na primeira conversa.',
  },
  {
    id: 'sigilo-acolhimento',
    question: 'Como é tratado o sigilo das minhas informações no primeiro contato?',
    answer:
      'Todos os dados enviados no formulário de contato e todas as informações compartilhadas em consulta são protegidos por sigilo ético e médico rigoroso, garantindo discrição e tranquilidade desde a primeira mensagem.',
  },
];
