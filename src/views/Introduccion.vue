<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LpUKMOgkEFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 El propósito de este componente es facilitar #[b la comprensión de los diferentes aspectos que involucran la implementación de Buenas Prácticas Agrícolas (BPA) en la producción agrícola]. Junto con los protocolos de BPA existentes y la legislación nacional vigente se presentan los saberes conceptuales para aclarar y facilitar la tarea del implementador. 

    .row.mb-5
      .col-12
        .cajon--rojo.p-4
          p Las BPA garantizan al consumidor la inocuidad del producto, #[b contribuyendo a evitar el deterioro del medio ambiente y buscando mejorar la seguridad laboral de los trabajadores.]


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
