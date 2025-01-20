# a. ¿Qué es y cómo funciona el elemento `<RouterLink>` en Angular?

El elemento `<RouterLink>` es una directiva proporcionada por el módulo de enrutamiento de Angular (`RouterModule`). Se utiliza para crear enlaces de navegación dentro de una aplicación Angular de una sola página (SPA). Permite definir rutas que el usuario puede seguir para moverse entre diferentes componentes sin recargar la página.

#### Funcionamiento de `<RouterLink>`

Cuando se hace clic en un enlace con la directiva `RouterLink`, Angular intercepta la acción y utiliza el servicio de enrutamiento (`Router`) para manejar la navegación de manera interna. Esto permite que la URL del navegador se actualice sin recargar la página completa, manteniendo un comportamiento fluido y eficiente típico de las aplicaciones SPA.


# b. Explica la diferencia entre routerLink y routerLinkActive. ¿Qué otras directivas se pueden utilizar con el router en Angular? 

La directiva `routerLinkActive` se utiliza para aplicar estilos o clases cuando una ruta específica está activa. Facilita destacar visualmente el enlace que corresponde a la página actual.

La directiva `routerLink` permite definir enlaces de navegación en una aplicación Angular. Su principal propósito es vincular la vista actual con una ruta específica definida en el enrutador. Cuando se utiliza, Angular intercepta la navegación para actualizar la URL sin recargar la página.

En resumen:

| Directiva         | Función                                                                                  |
|-------------------|------------------------------------------------------------------------------------------|
| `routerLink`      | Establece la ruta de navegación sin recargar la página.                                  |
| `routerLinkActive`| Aplica clases o estilos cuando la ruta correspondiente está activa.                      |


# c. Describe el servicio ActivatedRouteSnapshot. ¿Cómo se utiliza y en qué casos es útil?

El servicio `ActivatedRouteSnapshot` es una clase proporcionada por el módulo de enrutamiento de Angular. Representa una instantánea de la información sobre la ruta activa en el momento específico en que se accedió a ella. A diferencia de `ActivatedRoute`, que es reactiva y permite suscribirse a cambios, `ActivatedRouteSnapshot` proporciona un estado estático que no cambia durante la vida útil de la ruta actual.

### Propiedades principales
Algunas de las propiedades más utilizadas de `ActivatedRouteSnapshot` incluyen:

- **`params`**: Accede a los parámetros de la ruta.
- **`queryParams`**: Accede a los parámetros de consulta.
- **`data`**: Obtiene los datos estáticos asociados con la ruta.
- **`fragment`**: Recupera el fragmento (ancla) de la URL.
- **`url`**: Obtiene las partes de la URL.

###  Casos de uso
- `Guards de rutas`: Para verificar permisos antes de cargar un componente.
- `Resolvers`: Para cargar datos antes de activar una ruta.
- `Acceso inmediato a datos estáticos o parámetros de ruta`: Cuando no se necesita reactividad, solo la información de la ruta en el momento de la navegación.


# d. ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular (consulta para ello la documentación oficial de Angular)

# Guardias de Ruta en Angular

Las **Guardias de Ruta** (Route Guards) en Angular son interfaces que permiten controlar el acceso a las rutas de una aplicación. Estas interfaces determinan si una ruta puede ser activada, desactivada, cargada o si se deben resolver datos antes de la activación. Son fundamentales para implementar lógica de autorización, protección de rutas y carga de datos previa.

### Tipos de Guardias en Angular

Angular ofrece varios tipos de guardias, cada uno con un propósito específico:

1. **`CanActivate`**: Determina si una ruta puede ser activada. Se utiliza para proteger rutas que requieren que el usuario esté autenticado o tenga permisos específicos.

2. **`CanActivateChild`**: Similar a `CanActivate`, pero se aplica a las rutas hijas de una ruta específica. Es útil para proteger grupos de rutas hijas bajo una ruta principal.

3. **`CanDeactivate`**: Determina si se puede navegar fuera de la ruta actual. Es útil para advertir al usuario sobre cambios no guardados antes de abandonar una página.

4. **`CanLoad`**: Determina si un módulo de carga diferida (lazy-loaded) puede ser cargado. Es útil para proteger módulos que se cargan bajo demanda, evitando que se descarguen si el usuario no tiene permisos.

5. **`Resolve`**: Permite resolver datos antes de activar una ruta. Es útil para cargar datos necesarios para la vista antes de que se muestre al usuario.

### Uso de las Guardias en Angular

Para utilizar una guardia en Angular, se debe crear un servicio que implemente la interfaz correspondiente y luego agregarla a la configuración de rutas. A continuación, se muestra un ejemplo de cómo implementar y utilizar una guardia `CanActivate`:


# e. ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy? ( https://angular.io/guide lazy-loading-ngmodules)

La **carga Lazy** (Lazy Loading) es una técnica de optimización que permite cargar módulos de Angular de manera diferida, es decir, solo cuando son necesarios, en lugar de cargarlos al inicio de la aplicación. Esta estrategia mejora el rendimiento de la aplicación, ya que se cargan solo los módulos que el usuario necesita en ese momento, reduciendo así el tamaño inicial del bundle y acelerando el tiempo de carga.

### Beneficios de la carga Lazy
- **Mejora del rendimiento**: Se reduce el tamaño del bundle inicial, lo que mejora los tiempos de carga.
- **Carga bajo demanda**: Los módulos solo se cargan cuando el usuario navega a las rutas asociadas, lo que permite cargar solo lo necesario en el momento adecuado.
- **División del código**: Facilita la división del código en varios archivos más pequeños, que son cargados según sea necesario.

### ¿Cómo se configura la carga Lazy en Angular?

La carga Lazy se configura mediante el enrutador de Angular utilizando el método `loadChildren`, que permite definir un módulo que se cargará de forma diferida.

- El módulo que se carga de manera diferida debe estar configurado con RouterModule.forChild() en lugar de RouterModule.forRoot(), ya que forChild es para rutas de módulos secundarios.

- Si un módulo de carga diferida depende de servicios o módulos globales, asegúrate de proporcionarlos correctamente para evitar problemas con la inyección de dependencias.


# f. Compara las diferencias entre CanDeactivate y CanActivate guards en Angular. Proporciona ejemplos de cuándo se utilizaría cada uno.

Las **guardias de rutas** en Angular permiten controlar la navegación de la aplicación de acuerdo con ciertas condiciones. Dos de las guardias más comunes son `CanDeactivate` y `CanActivate`. Ambas tienen objetivos y usos distintos, y se aplican en diferentes momentos del ciclo de navegación.

### Diferencias entre `CanDeactivate` y `CanActivate`

| Característica         | `CanActivate`                                                | `CanDeactivate`                                                 |
|------------------------|--------------------------------------------------------------|---------------------------------------------------------------|
| **Propósito**           | Determina si una ruta puede ser activada (permitir la navegación a una ruta). | Determina si es posible navegar fuera de la ruta actual (permitir la navegación a otra ruta o fuera de la aplicación). |
| **Cuándo se utiliza**  | Se utiliza antes de que una nueva ruta sea activada, por lo general para proteger rutas o controlar el acceso (por ejemplo, si el usuario está autenticado). | Se utiliza antes de abandonar la ruta actual, típicamente cuando se desea advertir al usuario sobre la pérdida de datos no guardados o confirmar si realmente quiere abandonar la página. |
| **Tipo de valor retornado** | Devuelve un valor booleano o un `Observable<boolean>` que indica si se debe proceder a la activación de la ruta. | Devuelve un valor booleano o un `Observable<boolean>` que indica si se debe proceder con la desactivación de la ruta. |
| **Uso común**          | Proteger rutas o permitir acceso según condiciones específicas (autenticación, autorización). | Advertir al usuario sobre la pérdida de datos antes de que abandone la página o le permita realizar una acción que podría ser irreversible. |

`CanActivate`: Se utiliza cuando quieres controlar si el usuario puede acceder a una ruta o no. Esto es útil para proteger rutas privadas, verificar permisos o redirigir a usuarios no autenticados.

`CanDeactivate`: Se utiliza cuando quieres prevenir que el usuario abandone la ruta actual si hay datos no guardados o si la acción puede ser irreversible. Es útil en formularios o procesos donde el usuario podría perder información importante.


# g. ¿Qué es/para qué son útiles los middlewares en el contexto de Angular? ¿Dónde estás usando middlewares en nuestra aplicación?

En el contexto de Angular, los **middlewares** no son una característica integrada de la misma manera que lo son en otros entornos de desarrollo como Express.js (en Node.js). Sin embargo, el concepto de middleware puede entenderse en Angular como **funcionalidades intermedias** que procesan las solicitudes o acciones antes de llegar a su destino final. En Angular, esto se puede asociar principalmente con:

- **Interceptors de HTTP**: Se utilizan para interceptar solicitudes HTTP antes de ser enviadas y las respuestas antes de ser procesadas por los componentes. Los interceptores pueden modificar, redirigir o manejar errores en las solicitudes y respuestas.

- **Guardias de ruta (Route Guards)**: Aunque no son estrictamente middlewares, las guardias (`CanActivate`, `CanDeactivate`, etc.) actúan como un middleware para gestionar el acceso a rutas, permitiendo o bloqueando la navegación en función de condiciones previas.

## ¿Para qué son útiles los middlewares en Angular?

Los middlewares (o interceptores y guardias) en Angular son útiles por varias razones:

1. **Autenticación y Autorización**: Interceptores HTTP pueden agregar encabezados de autenticación a las solicitudes, y las guardias pueden restringir el acceso a rutas basadas en roles o autenticación.
   
2. **Manejo de Errores**: Los interceptores pueden interceptar errores HTTP y manejar los casos donde el servidor devuelve códigos de error (como 401 o 500) antes de que lleguen al componente.

3. **Transformación de datos**: Los interceptores pueden modificar las solicitudes y respuestas HTTP, por ejemplo, agregando parámetros o transformando la respuesta para que sea más adecuada para el componente.

4. **Control de Caché y Optimización**: Pueden emplearse para almacenar en caché las respuestas y evitar solicitudes repetidas, mejorando el rendimiento.

5. **Auditoría y Registros**: Los interceptores permiten realizar un seguimiento de todas las solicitudes HTTP realizadas en la aplicación para auditoría o registro.
