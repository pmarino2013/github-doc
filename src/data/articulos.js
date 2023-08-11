const ramaDefecto = {
  titulo:
    "Por buenas prácticas, ¿cúal debería ser la rama por defecto en Github?",
  img: "https://miro.medium.com/v2/resize:fit:801/1*DhagidpZutkaCmAZobmzDQ.png",
  texto:
    'En GitHub, una buena práctica es utilizar la rama principal ("main") como la rama por defecto para el repositorio. Sin embargo, ten en cuenta que esta práctica puede variar dependiendo de las preferencias y convenciones de tu equipo o proyecto.',
  titulo2:
    "Aquí hay algunas razones por las cuales usar la rama principal como rama por defecto es una buena práctica...",
  items: [
    {
      item: "Convenio estándar",
      texto:
        "En muchos proyectos, 'main' o 'master' se ha convertido en una convención estándar para la rama principal donde se encuentra el código estable y listo para producción.",
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
};

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
};

export { ramaDefecto, conflictos };
