<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Empresa agrícola
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-6
        p La FAO (2006) señala que la adopción de buenas prácticas agrícolas (BPA) #[b “consiste en la aplicación del conocimiento disponible a la utilización sostenible de los recursos naturales básicos para la producción, en forma benévola, de productos agrícolas alimentarios y no alimentarios inocuos y saludables, a la vez que se procuran la viabilidad económica y la estabilidad social”] (p. 9).
        .row.mt-5
          .col
            .cajon--azul.p-4.bg-1   
              p La aplicación de BPA implica el conocimiento, la comprensión, la planificación y mensura, registro y gestión orientados al logro de objetivos sociales, ambientales y productivos específicos.    
      .col-12.col-md-6
        img.img-t.img-a(src='@/assets/ilustraciones/img1.png', alt='') 
    p.mt-5 Los saberes conceptuales abordados en este componente están distribuidos según el orden lógico que se sugiere al trabajar con la implementación de buenas prácticas en una producción agrícola. El implementador debe tener presente en su proceso la #[b consulta de los protocolos y la normatividad, con el fin de revisar y adecuar dichos requisitos a las características de la empresa agrícola a orientar.] 

    .titulo-segundo#t_1_1.mt-5
      .h4 1.1  Definición

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h4.mb-0 La Organización de las Naciones Unidas para la Alimentación y la Agricultura (1985): 
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Define la empresa agrícola como #[b el conjunto de recursos asociados al recurso tierra, normalmente bajo una misma administración, cuyo objetivo es la producción agrícola, ganadera, forestal y piscícola.] Y esta misma organización entiende por "unidad familiar" al grupo de personas que habitan una misma casa, están ligados entre sí por lazos económicos y frecuentemente por dependencia de una empresa agrícola. 

    p.mt-5 De acuerdo con el texto anterior se puede decir que #[b la empresa agrícola es una fuerza económica para el desarrollo de un país]; ya que representa los eslabones productivos que abastecen con recursos naturales que conforman la alimentación de la población.       

    .titulo-segundo#t_1_2.mt-5
      .h4 1.2 Características y funciones de la empresa agrícola
    p.mt-5 Las principales características de la empresa agrícola se fundamentan en el carácter especial de este sector, ya que #[b en la mayoría de los estados de economía de mercado existen políticas especialmente diseñadas para la agricultura.] 

    p.mt-5 Siendo así que sus principales características son:       

    TabsB.my-5
      .py-4.py-md-5(titulo="Carácter biológico de la producción" :icono="require('@/assets/ilustraciones/img2.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Carácter biológico de la producción
            p Los procesos de producción industrial que obedecen a leyes físicas y/o químicas son independientes del medio ambiente y pueden ser controlados por el hombre. Las líneas de producción de una fábrica pueden ponerse en movimiento o detenerse en horas, o a lo más en días, según como se vean las condiciones del mercado. Esto no ocurre así en la agricultura, donde los procesos de producción, una vez iniciados, escapan a la voluntad del operador y siguen cursos determinados por leyes naturales, que pertenecen al dominio de la biología.
        
          .col-md-4
            figure
              img(src='@/assets/ilustraciones/img2_2.svg', alt='')

      .py-4.py-md-5(titulo="Naturaleza temporal de los procesos de producción" :icono="require('@/assets/ilustraciones/img3.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Naturaleza temporal de los procesos de producción
            p Comparados con la producción industrial, la producción agrícola depende en gran medida del paso del tiempo y, más específicamente, de las estaciones del año.
          .col-md-4
            figure
              img(src='@/assets/ilustraciones/img3_3.svg', alt='')


      .py-4.py-md-5(titulo="Estructura del recurso" :icono="require('@/assets/ilustraciones/img4.svg')")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Estructura del recurso
            p La estructura de recursos de la empresa genera al menos cuatro efectos que la distinguen de la empresa industrial. En primer lugar, #[b la agricultura se caracteriza por tener una mayor proporción de inversión en insumos fijos tales como tierra, construcciones]; en segundo lugar y estrechamente relacionado con lo anterior, la empresa agrícola tiene una mayor proporción de costos fijos en su estructura de costos que la empresa industrial, lo que le resta flexibilidad para adaptarse a condiciones cambiantes y la hace más vulnerable a las evoluciones adversas del mercado. 
            p.mt-3 En tercer lugar, #[b la agricultura está más obligada que otras actividades económicas al resguardo del medio ambiente]. Finalmente, la importancia de la tierra en la producción y su relativa fijeza en la estructura de recursos hace que la empresa agrícola tenga más dificultades que la empresa industrial en aumentar su escala de producción. Ello quiere decir que la empresa agrícola tiene relativamente más dificultades que la empresa industrial en reducir sus costos unitarios mediante economías de escala.              
        
          .col-md-4
            figure
              img(src='@/assets/ilustraciones/img4_4.svg', alt='')

    .titulo-segundo#t_1_3.mt-5
      .h4 1.3 Tipos de empresa agrícola
    p.mt-5 A continuación, puede revisar en la siguiente infografía, #[b la clasificación de la empresa agrícola, según McConnell y Dillon (1997).]  

    .row.justify-content-center.mt-5
        .col-10
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img5.svg', alt='')   
                    .h6 Pequeña empresa agrícola familiar de subsistencia
                    p.mt-3 Son pequeñas explotaciones agrícolas pertenecientes a familias que basan la satisfacción de todas sus necesidades de subsistencia en la producción de la empresa agrícola. 

    .row.justify-content-center.mt-1
        .col-10
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img6.svg', alt='')   
                    .h6 Pequeña empresa agrícola familiar de semisubsistencia (o semicomerciales)
                    p.mt-3 Este tipo es bastante frecuente y consiste en unidades cuya producción se orienta parcialmente hacia la satisfacción de necesidades familiares (alimentación, por lo general) y parcialmente hacia el mercado.                    

    .row.justify-content-center.mt-1
        .col-10
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img7.svg', alt='')   
                    .h6 Pequeña empresa agrícola especializada independiente
                    p.mt-3 Estas empresas agrícolas se caracterizan por un alto grado de especialización y por la independencia con que sus dueños toman las decisiones de producción. Se diferencian del tipo anterior por su grado de especialización y porque en la generalidad de los casos son explotaciones con una fuerte orientación comercial y trabajan con tecnología moderna.                     

    .row.justify-content-center.mt-1
        .col-10
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img8.svg', alt='')   
                    .h6 Pequeña empresa agrícola especializada dependiente
                    p.mt-3 Estas unidades son muy similares a las pertenecientes al tipo anterior, con la diferencia que no son libres para decidir sus programas de producción.                     

    .row.justify-content-center.mt-1
        .col-10
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img9.svg', alt='')   
                    .h6 Mediana y gran empresa familiar comercial
                    p.mt-3 Esta es la llamada "agricultura empresarial" y que persigue únicamente fines comerciales, como cualquier empresa. No obstante, no pierde el carácter familiar, en el sentido que la empresa "contrata" sus trabajadores permanentes y su administración dentro de la familia que posee la empresa agrícola y no necesariamente en el mercado del trabajo.                    

    .row.justify-content-center.mt-1
        .col-10
            .card-media
                .card-media__body
                    figure.card__figure
                        img(src='@/assets/ilustraciones/img10.svg', alt='')   
                    .h6 Medianas y grandes sociedades agrícolas
                    p.mt-3 La principal diferencia con el tipo anterior radica en que estas empresas, a pesar de explotar una o más empresas agrícolas, no tienen carácter familiar y como consecuencia de ello, no corresponde a la definición de empresa agrícola dada anteriormente. La forma jurídica escogida por estas empresas corresponde generalmente a una sociedad anónima, por lo que los dueños son generalmente accionistas que no viven de la o las empresas agrícolas.                    

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
