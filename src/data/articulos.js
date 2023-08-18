const info = [
  {
    titulo:
      "Por buenas prácticas, ¿cúal debería ser la rama por defecto en Github?",
    img: "https://miro.medium.com/v2/resize:fit:801/1*DhagidpZutkaCmAZobmzDQ.png",
    texto:
      'En GitHub, una buena práctica es utilizar la rama principal ("main") como la rama por defecto para el repositorio. Sin embargo, ten en cuenta que esta práctica puede variar dependiendo de las preferencias y convenciones de tu equipo o proyecto.',
    titulo2:
      "Razones por las cuales usar la rama principal como rama por defecto es una buena práctica...",
    items: [
      {
        item: "Convenio estándar",
        texto:
          "En muchos proyectos, 'main' se ha convertido en una convención estándar para la rama principal donde se encuentra el código estable y listo para producción.",
      },
      {
        item: "Compatibilidad con herramientas",
        texto:
          "Muchas herramientas y servicios están configurados para asumir que la rama principal es donde se encuentra el código base. Esto incluye sistemas de integración continua, despliegue automático y otras herramientas de desarrollo.",
      },
      {
        item: "Claridad para colaboradores",
        texto:
          "Al utilizar la rama principal como la rama por defecto, se brinda claridad a los colaboradores sobre dónde deben buscar el código estable y actualizado.",
      },
      {
        item: "Facilita la colaboración",
        texto:
          "Cuando los colaboradores clonan el repositorio, la rama principal es lo primero que ven. Esto facilita la colaboración y evita confusiones sobre en qué rama se debe trabajar.",
      },
      {
        item: "Refleja el flujo de trabajo común",
        texto:
          "En muchos flujos de trabajo de desarrollo, se hace un seguimiento de las ramas de características, ramas de correcciones de errores y otras ramas de desarrollo antes de fusionar en la rama principal. Al tener la rama principal como la rama por defecto, refleja este flujo de trabajo común.",
      },
    ],
    url: "https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches",
  },
  {
    titulo: "¿Cúando hay conflictos en Github?",
    img: "https://media.tenor.com/AKq1UiO-dFAAAAAd/git-merge.gif",
    texto:
      "Los conflictos en GitHub suelen ocurrir cuando hay problemas de combinación de cambios en el código fuente entre diferentes ramas de un repositorio. Estos conflictos pueden surgir cuando dos o más personas están trabajando en la misma área de código y realizan cambios en paralelo que afectan a las mismas líneas o archivos.",
    titulo2:
      "Los conflictos en GitHub generalmente se manejan de la siguiente manera...",
    items: [
      {
        item: "Detección de conflictos",
        texto:
          "GitHub detecta automáticamente los conflictos cuando intentas fusionar (merge) o aplicar cambios de una rama a otra. Te notificará que hay conflictos y no permitirá que la fusión se complete automáticamente.",
      },
      {
        item: "Resolución de conflictos",
        texto:
          'Para resolver los conflictos, debes acceder al repositorio en tu máquina local utilizando Git. Abres el código en un editor de texto y verás secciones marcadas con "<<<<<<", "=======" y ">>>>>>>", que indican las partes conflictivas. Debes editar manualmente estas secciones para decidir qué cambios quieres mantener y cómo deseas combinarlos.',
      },
      {
        item: "Compromiso de la solución",
        texto:
          "Una vez que hayas resuelto los conflictos en tus archivos locales, debes guardar los cambios y confirmarlos en tu rama.",
      },
      {
        item: "Empuje de los cambios",
        texto:
          "Después de resolver los conflictos y guardar los cambios, debes hacer 'push' de los cambios a la rama en GitHub.",
      },
      {
        item: "Finalización de la fusión",
        texto:
          "Si estás tratando de fusionar ramas, después de resolver los conflictos y hacer 'push' de los cambios, la fusión se completará en GitHub.",
      },
    ],
    url: "https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github",
  },
  {
    titulo: "¿Cúando usar Fork en Github?",
    img: "https://raw.githubusercontent.com/gist/lqb2/48e43ee11e8f5b00542a/raw/75348d50e4a4516469287d0ca2e1a5a69cee07f6/forkit.gif",
    texto:
      "'Forking' en GitHub es una acción que implica hacer una copia de un repositorio público en tu propia cuenta de GitHub.",
    titulo2: "Esto puede ser útil en varias situaciones...",
    items: [
      {
        item: "Contribuir a proyectos de código abierto",
        texto:
          "Si deseas contribuir a un proyecto de código abierto, puedes hacer un fork del repositorio original en tu cuenta. Luego, puedes realizar tus cambios en la copia y enviar una solicitud de extracción (pull request) al repositorio original. El propietario del proyecto original puede revisar tus cambios y decidir si los incorpora al proyecto principal.",
      },
      {
        item: "Trabajar en un proyecto personal basado en otro",
        texto:
          "Si encuentras un proyecto existente que es similar a lo que deseas crear, puedes hacer un fork del repositorio y comenzar a trabajar en tu propia versión. Esto te ahorra tiempo al proporcionarte una base sólida para empezar.",
      },
      {
        item: "Realizar experimentos",
        texto:
          "Si quieres probar nuevas ideas o funcionalidades en un proyecto, puedes hacer un fork y realizar tus cambios sin afectar el repositorio original. Esto te permite iterar y experimentar sin preocuparte por romper el código original.",
      },
      {
        item: "Aprender y practicar",
        texto:
          "Hacer forks de proyectos que te interesen puede ser una excelente manera de aprender y practicar. Puedes explorar el código, hacer cambios, probar cosas nuevas y ver cómo funcionan.",
      },
      {
        item: "Crear tu propia versión de un proyecto",
        texto:
          "Si deseas crear tu versión personalizada de un proyecto, hacer un fork te permite tener una copia independiente para desarrollar y mantener según tus propias necesidades.",
      },
      {
        item: "Copiar configuraciones y recursos",
        texto:
          "A veces, puedes hacer un fork de un repositorio solo para utilizar ciertas configuraciones, archivos de configuración, plantillas u otros recursos que el repositorio proporciona.",
      },
    ],
    url: "https://docs.github.com/es/get-started/quickstart/fork-a-repo",
  },
  {
    titulo: "Consejos para trabajo colaborativo con Github",
    img: "https://www.vantage-ai.com/hubfs/Pull%20Request%20Attlasian.png",
    texto:
      "Trabajar colaborativamente en GitHub implica seguir ciertas prácticas para asegurarte de que la colaboración sea eficiente, ordenada y sin conflictos innecesarios.",
    titulo2: "Aquí hay algunas buenas prácticas que puedes seguir...",
    items: [
      {
        item: "Hacer Fork y Clonar",
        texto:
          "Hacer un fork del repositorio original en tu propia cuenta.\nClonar tu fork en tu máquina local usando git clone.",
      },
      {
        item: "Mantén tu Fork Actualizado",
        texto:
          "Regularmente sincroniza tu fork con el repositorio original utilizando git pull y git push.\nMantener tu fork actualizado reduce la probabilidad de conflictos al enviar pull requests.",
      },
      {
        item: "Trabaja en Ramas",
        texto:
          "Crea una rama separada para cada nueva característica, arreglo de errores o cambio importante.\nEsto evita afectar la rama principal (main) directamente y facilita la revisión y combinación de tus cambios.",
      },
      {
        item: "Comunicación",
        texto:
          "Mantén una comunicación clara y abierta con otros colaboradores.\nUsa los comentarios en los pull request y las discusiones para aclarar dudas y discutir los cambios.",
      },
      {
        item: "Pull Requests",
        texto:
          "Cuando estés listo para compartir tus cambios, crea un pull request desde tu rama hacia la rama principal del repositorio original.\nProporciona una descripción clara de tus cambios y por qué son necesarios.",
      },
      {
        item: "Revisiones y Comentarios",
        texto:
          "Invita a otros colaboradores a revisar tu pull request.\nAcepta y considera sus comentarios y sugerencias para mejorar la calidad de los cambios.",
      },
      {
        item: "Resuelve Conflictos",
        texto:
          "Si hay conflictos entre tu rama y la rama principal, resuélvelos antes de hacer tu pull request.\nActualiza tu rama con los cambios más recientes de la rama principal.",
      },
      {
        item: "Pruebas y Validación",
        texto:
          "Antes de enviar un pull request, asegúrate de que tus cambios funcionen correctamente y no introduzcan nuevos errores.",
      },
      {
        item: "Usa Etiquetas y Milestones",
        texto:
          "Utiliza etiquetas (labels) para categorizar y clasificar los pull requests y los problemas.\nUsa milestones (hitos) para agrupar tareas y seguimiento de avance.",
      },
      {
        item: "Código Limpio y Documentación",
        texto:
          "Escribe código legible, sigue las convenciones de estilo y agrega comentarios cuando sea necesario.\nProporciona documentación adecuada para nuevas características o cambios significativos.",
      },
      {
        item: "Agradecimientos y Reconocimientos",
        texto:
          "Agradece a otros colaboradores por sus contribuciones y reconoce su trabajo en la documentación o en las notas de versión.",
      },
    ],
    url: "https://docs.github.com/es/pull-requests/collaborating-with-pull-requests",
  },
];

const conflictos = {
  titulo: "¿Cúando hay conflictos en Github?",
  img: "https://media.tenor.com/AKq1UiO-dFAAAAAd/git-merge.gif",
  texto:
    "Los conflictos en GitHub suelen ocurrir cuando hay problemas de combinación de cambios en el código fuente entre diferentes ramas de un repositorio. Estos conflictos pueden surgir cuando dos o más personas están trabajando en la misma área de código y realizan cambios en paralelo que afectan a las mismas líneas o archivos.",
  titulo2:
    "Los conflictos en GitHub generalmente se manejan de la siguiente manera...",
  items: [
    {
      item: "Detección de conflictos",
      texto:
        "GitHub detecta automáticamente los conflictos cuando intentas fusionar (merge) o aplicar cambios de una rama a otra. Te notificará que hay conflictos y no permitirá que la fusión se complete automáticamente.",
    },
    {
      item: "Resolución de conflictos",
      texto:
        'Para resolver los conflictos, debes acceder al repositorio en tu máquina local utilizando Git. Abres el código en un editor de texto y verás secciones marcadas con "<<<<<<", "=======" y ">>>>>>>", que indican las partes conflictivas. Debes editar manualmente estas secciones para decidir qué cambios quieres mantener y cómo deseas combinarlos.',
    },
    {
      item: "Compromiso de la solución",
      texto:
        "Una vez que hayas resuelto los conflictos en tus archivos locales, debes guardar los cambios y confirmarlos en tu rama.",
    },
    {
      item: "Empuje de los cambios",
      texto:
        "Después de resolver los conflictos y guardar los cambios, debes hacer 'push' de los cambios a la rama en GitHub.",
    },
    {
      item: "Finalización de la fusión",
      texto:
        "Si estás tratando de fusionar ramas, después de resolver los conflictos y hacer 'push' de los cambios, la fusión se completará en GitHub.",
    },
  ],
  url: "https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github",
};

export default info;
