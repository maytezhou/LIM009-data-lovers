# Data Lovers

## Índice

* [Preámbulo](#preámbulo)
* [Descripción](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## Preámbulo

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el detalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Resumen del proyecto

Data Perú es una herramienta que permitirá al usuario encontrar data (en años y porcentajes) sobre los Indicadores de Desarrollo Humano del Perú, la cual está clasificada por categorías: Laboral, Protección Social, Índice de capital Humano, Salud, Género, Educación, Estadísticas Militares, Población, Inversión, Deuda Externa.
##PROCESO DE DISEÑO UX
#1.DESCUBRIMIENTO
En esta etapa realizamos 2 entrevistas personales.
La primera entrevista se realizó a un Diseñador Gráfico de 40 años de edad que revisa información diariamente, y que utiliza este tipo de herramientas para entender y ajustar procesos y descubrir Insights. Menciona que lo más importante en una herramienta donde se muestra data es la simpleza y que no existan distorsiones en el contexto. Además, nos dice que al momento de decidir que herramienta usar, utiliza como criterios, la reputación de la institución que brinda la información, la cantidad de usuarios que posee y la cantidad de data recolectada. Él destaca también que le encantaría tener acceso a data que se relacione con él.
La segunda entrevista se realizó a una estudiante universitaria de 24 años que revisa información constantemente para realizar proyectos de investigación (tesina), lo que requiere analizar, identificar problemas, necesidades y sus posibles soluciones. Menciona que es muy difícil de encontrar data específica e indica que lo que más valora es cuando la información es clara, precisa, sencilla, fácil de entender y que contenga la información que realmente necesita. Además, señala que algo que le llama mucho la atención en este tipo de herramientas son los gráficos interactivos y que le gustaría que adicionalmente a la data mostrada, exista una sección adicional con artículos o links de proyectos relacionados a la data que está buscando.
Además de las entrevistas personales, realizamos encuestas online en las que obtuvimos la siguiente información:
Los encuestados eran estudiantes entre 20 y 23 años que buscan data para realizar trabajos académicos y/o proyectos de investigación. Mencionan que antes de escoger que sitio utilizar, evalúan si las paginas son confiables. Algunas deficiencias que encuentran en este tipo de herramienta son el tamaño de las leyendas, que no están actualizadas y que no cuentan con datos que se apliquen a la realidad. Además, indican que les gustaría una herramienta que les permita ser capaces de filtrar de acuerdo a la categoría que deseen y que cuente con un buscador.
#2.DEFINICIÓN
¿Quiénes son los principales usuarios del producto?
Los principales usuarios de Data Perú son estudiantes universitarios de 20 a 23 años y/o profesionales que buscan datos estadísticos al menos una vez por semana para la realización de trabajos académicos (monografía)y/o proyectos de investigación que requieren información sobre los Indicadores de Desarrollo Humano del Perú. Además de personas que revisan constantemente este tipo de datos con la finalidad de estar actualizados e informados.
¿Cuáles son los objetivos de estos usuarios en relación con tu producto?
Acceder a datos confiables de los Indicadores de Desarrollo del Perú, la cual esté presentada de manera sencilla, precisa y fácil de entender, que le brinde la opción de ordenarla y que le muestre la data (años y porcentajes) del indicador de acuerdo a la categoría que elija.
¿Cómo crees que el producto que estás creando está resolviendo sus problemas?
En las entrevistas que realizamos, los usuarios mencionan que existen muchas deficiencias en las páginas que muestran data como, por ejemplo: el tamaño de las leyendas. Además, mencionan que muchas veces no cuentan con referencia y que no están actualizadas.
A partir de ello, se identificó la necesidad que tienen los usuarios principales de buscar información confiable, específica, actualizada y aplicable a la realidad.
Representación/Personificación del Usuario(Arquetipo)
Zalet, estudiante universitaria de 24 años, que acaba de terminar la carrera de Administración de Negocios Internacionales pero que está realizando un proyecto de investigación (tesina) para adquirir su bachiller. Tiene mucha dificultad para encontrar data confiable y específica que se relacione con su tema de tesis y que sea fácil de entender.
PROBLEMA A RESOLVER:
Falta de acceso a data confiable, específica, actualizada, fácil de entender y aplicable a la realidad.
####PLANIFICACIÓN-SCRUM 
###HISTORIAS DE USUARIO
##HU01 - El usuario requiere poder tener una opción de selección para filtrar los Indicadores del Perú por diferentes categorías:
	Laboral
	Protección Social
	Índice de capital Humano
	Salud 
	Género 
	Educación
	Estadísticas Militares
	Población
	Inversión
	Deuda Externa

 #ACTIVIDADES A REALIZAR:
    -Investigación sobre el usuario (entrevistas personales y encuestas online)
    -Diagramar el flujo
    -Prototipo de baja fidelidad con una estructura básica de las 3 diferentes vistas.
FUNCIONALIDAD:
Obteniendo la lista de indicadores filtrados por categoría:   
Identificar los IndicatorCodes de cada Indicador.
Acceder a los IndicatorCodes de todos los indicadores (mostrarlo en Consola).
Obtener las 3 primeras iniciales de los IndicatorsCode de todos los indicadores. (un array de Iniciales repetidas y mostrarlo en consola)
Obtener un array de las 3 primeras iniciales de los IndicatorsCode sin que se repitan (mostrarlo en consola).
Crear un objeto (una nueva data) donde se explique qué significa cada una de las iniciales. (IndicatorInitials y su descripción)
Crear un array de objetos donde cada objeto tiene 2 propiedades: indicador con las 3 primeras iniciales y descripción con lo que significa.
Imprimir en el DOM con Template Literals una opción de selección con cada una de las descripciones de las iniciales de los indicadores.

ESTRUCTURA HTML:
	Establecer el header donde irá el logotipo del Banco Mundial
	Establecer la etiqueta h1 donde irá el título 
	Crear un elemento html donde se mostrará la opción de selección con el nombre de las diferentes categorías
	Crear el botón buscar
	Establecer el footer
    ESTILOS CSS:
    -Crear estilos generales (colores, tipografía, tamaño de fuente, grid).
 
DEFINICIÓN DE TERMINADO 
Se muestra el título, una opción de selección (filtrado por categoría), el botón buscar y el footer. Maquetado de html (header, container side-bar, footer). 
2-HU02: Yo como estudiante universitario quiero encontrar una lista de indicadores pertenecientes a una misma categoría que he seleccionado, para acceder de manera más rápida y sencilla a la data (años y porcentajes) de un determinado indicador.
FUNCIONALIDAD: 
Crear una función que filtre por categoría, que reciba como input: la data (array de Indicadores /array de Objetos) y tenga como condición las 3 primeras iniciales de un indicador y retorne como output los Indicadores de una misma categoría (un array de Indicadores/objetos de una misma categoría la cual es seleccionada por el usuario y que se muestre el resultado en consola)
Imprimir en el DOM con Template Literals los IndicatorName de los indicadores que pertenezcan a una misma categoría (hacer que todos los nombres de los indicadores que pertenezcan a una misma categoría sean clickeables).
ESTRUCTURA HTML:
CSS:
DEFINICIÓN DE TERMINADO:
##3-HU03
Yo como estudiante universitario quiero ordenar la lista de los nombres de los Indicadores pertenecientes a la categoría que seleccioné de manera ascendente A-Z o descendente de la Z-A para poder acceder de manera más fácil y rápida a un determinando Indicador.
FUNCIONALIDAD:
Crear una función que ordene de manera ascendente de la A-Z y descendente de la Z-A, la cual reciba como input el array de indicadores pertenecientes a una misma categoría (elegida previamente por el usuario) y la elección del usuario (ya sea ascendente A-Z o descendente Z-A).
Imprimir en el DOM una opción de selección: A-Z(ascendente) y Z-A(descendente).
ESTRUCTURA HTML
CSS:
DEFINICIÓN DE TERMINADO:
##4-HU04
Yo como estudiante universitario quiero visualizar la data (años y porcentajes) del indicador que elija para poder comparar los porcentajes de un determinado año respecto a otro.
FUNCIONALIDAD
Obteniendo los años y los porcentajes:
Crear una función que filtre por IndicatorName (Indicador id) seleccionado por el usuario y que retorne como output ese único Indicador (array de un solo Objeto [{}]) y que se muestre en la consola.
Crear una función que obtenga todos los keys (un array de strings con los años) de ese único Indicador seleccionado ([{}]) por el usuario y que se muestre en consola.
Imprimir en el DOM con Template Literals los keys(años) y values diferentes a vacío(porcentajes) dentro de una tabla.
ESTRUCTURA HTML
CSS:
DEFINICIÓN DE TERMINADO:
##5-HU05
Yo como estudiante universitario quiero visualizar el promedio por indicador para posteriormente poder calcular la varianza y la desviación estándar con los porcentajes de cada año del indicador que seleccioné.
FUNCIONALIDAD
Obteniendo el promedio:
Crear una función que obtenga todos los values diferentes de vacío (un array de strings con los porcentajes diferentes de vacío) de ese único Indicador seleccionado ([{}]) por el usuario y que se muestre en consola.
Crear una función que obtenga el promedio, que tenga como input un array de Strings con los porcentajes diferentes de vacío [“”,“”] que sume todos los porcentajes y los divida por el número de elementos del array y que el resultado lo redondee a centesimales y automáticamente lo convierta en un String  y que finalmente ese String  se muestre en consola.
Imprimir en el DOM con Template Literals el promedio(string).
ESTRUCTURA HTML
CSS:
DEFINICIÓN DE TERMINADO:

## Checklist

* [✓ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [✓ ] Pasa tests (`npm test`)
* [✓ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [✓ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [✓ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [✓ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [✓ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [✓ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.