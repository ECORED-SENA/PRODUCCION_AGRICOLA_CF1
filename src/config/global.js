export default {
  global: {
    componenteFormativo: 'Buenas Prácticas Agrícolas',
    descripcionCurso:
      'El propósito de este componente es facilitar la comprensión de los diferentes aspectos que involucran la implementación de Buenas Prácticas Agrícolas (BPA) en la producción agrícola. Junto con los protocolos de BPA existentes y la legislación nacional vigente se presentan los saberes conceptuales para aclarar y facilitar la tarea del implementador. <br/><br/>Las BPA garantizan al consumidor la inocuidad del producto, contribuyendo a evitar el deterioro del medio ambiente y buscando mejorar la seguridad laboral de los trabajadores. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Empresa agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características y funciones de la empresa agrícola',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de empresa agrícola',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Buenas prácticas agrícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto y reseña histórica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Manual de BPA',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Criterios de cumplimiento',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Economía solidaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Principios de la economía solidaria',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Comercialización agrícola',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Agentes que intervienen en el proceso de comercialización',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Tipos de mercados',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Tipos de empresas de economía solidaria',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Claudia Patricia Sánchez Peñaranda',
        cargo: 'Instructora',
        centro: 'Agrosena',
        regional: 'CAB',
      },
      {
        nombre: 'Fredy Orlando Ibáñez Morales ',
        cargo: 'Instructor',
        centro: 'Agroambiental',
        regional: 'CAB',
      },
      {
        nombre: 'Yanet Bolaños Botina',
        cargo: 'Instructora',
        centro: 'Agroambiental',
        regional: 'CAB',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: [
          'María Natalia Maldonado Delgado',
          'Zuleidy Maria Ruiz Torres',
          'Wilson Arenales',
          'Junior Rodriguez',
          'John Archiniegas',
          'Daniela Muñoz Bedoya',
          'Oscar Javier Latorres',
          'Ludwyng Corzo Garcia',
          'Carolina Tamayo',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura -IICA-. (2018). Manual 5: el mercado y la comercialización. Programa de Fortalecimiento de Capacidades Agroempresariales y Asociativas, No. 5. San José, Costa Rica.  ',
      link:
        'https://repositorio.iica.int/bitstream/handle/11324/7088/BVE18040224e.pdf;jsessionid=F7BEFFC7C56C742FB788C8233AFBC65F?sequence=1',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura -IICA-. (2018). Manual 8: bases de la organización asociativa. Programa de Fortalecimiento de Capacidades Agroempresariales y Asociativas, No. 8. San José, Costa Rica ',
      link:
        'http://repositorio.iica.int/bitstream/handle/11324/7127/BVE18040228e.pdf;jsessionid=44104C332E8919CEFF87F18A0E1ACF08?sequence=1',
    },
    {
      referencia:
        'Izquierdo, J., y Rodríguez, F., M. (2006). Buenas Prácticas Agrícolas (BPA). En busca de sostenibilidad, competitividad y seguridad alimentaria. Organización de las Naciones Unidas para la Alimentación y la Agricultura. Grupo de Agricultura. Oficina Regional de la FAO para América Latina y El Caribe. ',
      link: 'http://www.fao.org/3/A0718s/A0718s00.pdf',
    },
    {
      referencia:
        'Troncoso, J. y Villalobos, P. (2004). Principios de administración de empresas agrícolas. Talca.',
      link:
        'https://docplayer.es/7597776-Principios-de-administracion-de-empresas-agricolas.html',
    },
    {
      referencia:
        'Vargas, O. G., y Fundación Chile. (2000). Manual de criterios comunes para el control de gestión en empresas agropecuarias. Programa de Gestión Agropecuaria. Fundación Chile.',
    },
  ],
  glosario: [
    {
      termino: 'Autogestión',
      significado:
        'Sistema de organización de una empresa según el cual los trabajadores participan en todas las decisiones.',
    },
    {
      termino: 'Barbecho',
      significado:
        'Área destinada para el vertimiento de aguas contaminadas con plaguicidas.',
    },
    {
      termino: 'BPA',
      significado:
        'Las buenas prácticas agrícolas son prácticas orientadas a la sostenibilidad ambiental, económica y social para los procesos productivos de la explotación agrícola que garantizan la calidad e inocuidad de los alimentos y de los productos no alimenticios (Resolución ICA 020021 de 2017).',
    },
    {
      termino: 'Desinfección',
      significado:
        'Reducción del número de microorganismos presentes en el ambiente por medio de agentes químicos y/o físicos, a un nivel que no comprometa la inocuidad o la aptitud del alimento.',
    },
    {
      termino: 'Empresa',
      significado:
        'Unidad de organización dedicada a actividades industriales, mercantiles o de prestación de servicios con fines lucrativos.',
    },
    {
      termino: 'FAO',
      significado:
        'Es la Agencia de las Naciones Unidas que lidera el esfuerzo internacional para poner fin al hambre.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'La garantía de que los alimentos no causarán daño al consumidor cuando se preparen y/o consuman de acuerdo con el uso a que se destinan (Resolución ICA 020021 de 2017).',
    },
    {
      termino: 'Limpieza',
      significado:
        'Es la eliminación de tierra, restos de alimentos, suciedad, grasa u otras materias primas objetables o ajenas al producto e instalaciones del predio.',
    },
    {
      termino: 'Normativo',
      significado:
        'Conjunto de normas aplicables a una determinada materia o actividad. (RAE) ',
    },
    {
      termino: 'Peligro',
      significado:
        'Agente biológico, químico o físico presente en el alimento o en una propiedad de este, que puede provocar un efecto nocivo para la salud.',
    },
    {
      termino: 'Producción agrícola',
      significado:
        'Es el resultado de la práctica de la agricultura. La producción agrícola es aquella que consiste en generar vegetales para el consumo humano.',
    },
    {
      termino: 'Registro documental',
      significado:
        'Información escrita que proporciona evidencia objetiva de las actividades desempeñadas en el predio.',
    },
    {
      termino: 'Residuo',
      significado:
        'Cualquier sustancia o agente biológico específico presente en o sobre un producto agrícola, o alimento de uso humano o animal, consecuencia de la exposición a un producto fitosanitario. El término incluye los metabolitos y las impurezas consideradas de importancia toxicológica.',
    },
    {
      termino: 'Sostenible',
      significado:
        'Especialmente en ecología y economía, que se puede mantener durante largo tiempo sin agotar los recursos o causar grave daño al medio ambiente. (RAE) ',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Poder trazar la historia, el uso o la ubicación de un producto por medio del mantenimiento de registros documentales.',
    },
  ],
}
