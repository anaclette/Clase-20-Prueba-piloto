Querida Ana, 

Felicitaciones. Cumplís a la perfección todas las consignas y se nota que acá hay mucho tiempo y esfuerzo invertido. Desde el primer momento frente a tu web sabemos que estamos frente a un trabajo muy bien hecho, pero viendo en profundidad tu código, se nota realmente lo bien que está. Como en tu trabajo anterior, la inmensa cantidad de detalles que pusiste se celebra y aprecia un monton. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. La excepcion es que las tarjetas de producto deberian ser article en lugar de div. Los colores y contrastes son en general adecuados y utilizas el atributo alt muy bien. Usas bien las etiquetas aria-hidden, aunque se apreciarian algunas etiquetas aria extra para asistir a quien no puede ver tu web (por ejemplo, en el boton para cerrar el carrito)

La decisión que no entiendo fue la de eliminar el outline de tus botones e inputs. Esto hace que tu web sea practicamente imposible de navegar con teclado, ya que es imposible saber en qué producto hemos hecho foco. *Nunca* debemos eliminar el outline que viene por defecto en botones, links o elementos de formulario, a menos que lo reemplacemos con otra cosa que reaccione al foco del usuario: no puedo insistir lo suficiente en este punto. Asi como esta, son poquisimas las ocasiones donde hay foco visible en tu web y la navegacion por teclado es imposible. 

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. No solo eso, sino que la reutilizacion en responsive es perfecta. Nada que comentar aqui: se nota que hiciste un trabajo enorme y que pusiste mucho esfuerzo en que quedaran perfectos. 

No anda la funcionalidad de contar productos mostrados, y me apena porque el problema es que te falto llamar a la funcion refreshVisibleProducts() al final de la funcion filter(). Con ese cambio, ya tu codigo anda perfecto. Me encanta como lo resolviste, muy distinto a como lo mostré en clase pero funcionando a la perfeccion, demostrando que no solo tenes el compromiso de hacer las cosas sino el talento para encontrar tus propias soluciones.


### Carrito

Tu carrito funciona muy bien, esta muy bien maquetado y cumple todos los requerimientos solicitados. Me gusta como resolviste los productos que se agregan o quitan: es distinto a como lo hizo el modelo de Ada, y eso habla de tu esfuerzo por pensarlo sola y solucionarlo con lo que sabes. 

### Checkout

Destaco lo prolijo del maquetado. Las funcionalidades estan muy, muy bien. 
El boton de "Finalizar" deberia ser un input type="submit" o un button type="submit" para permitir que el formulario se pueda enviar, y la etiqueta form deberia llegar hasta ese boton. Los dos input de email y nombre incluyen el atributo "required" para que se hagan obligatorios, y el usuario no pueda terminar la compra si no estan completados, pero al no estar rodeados de la etiqueta form no cumplen esa funcion. Un detalle, minimo, pero que te comento para que tu codigo quede perfecto, es que si agrego un producto, voy al checkout, selecciono pagar con tarjeta, pero luego opto por volver atras y agregar otro producto, al volver al carrito tendre los datos "viejos" en el recargo y el descuento. Detalle, pero quiza quieras verlo: los numeros del carrito deberian actualizarse cuando se abre o se cierra. 

### Misc 

Se agradecen los detalles a cada instante, que revelan el cuidado por tu TP. Mejoraste la web modelo, y agregaste un monton de cosas que hicieron que fuera un placer recorrer tu TP. Excelente. 

Tu HTML esta perfecto. Excelente la indentacion, claro, completo, con las etiquetas semanticas adecuadas. Tu CSS tambien esta muy prolijo y bien hecho, reutilizas bien los estilos y los nombres de clases son claros y descriptivos. Se nota muchisimo el avance desde el portfolio hasta hoy. 

Tengo que destacar especialmente la calidad del JS. Todos los comentarios que dejas son utiles para el lector, quiza pecas de excesiva pero en este punto de tu aprendizaje me parece la decision acertada. El orden es perfecto. Ni un solo console log olvidado. 

Tenes muchos y muy buenos commits, y ni hablar de la calidad de tu README. Este es un trabajo del que estar muy orgullosa. 

### Nota 

En resumen, hiciste un enorme trabajo, casi ningun problema en el producto entregado y con una enorme atencion al detalle y la calidad. Solo lamento la decision de eliminar los outline, que es bastante grave en terminos de accesibilidad y que comentamos en clase. Salvo por eso, te extiendo mis felicitaciones: sin dudas tenes un enorme futuro como desarrolladora front end. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✅ Respeta el funcionamiento.
✅ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅ Funciones pequeñas.
✅ Commits con mensajes adecuados.
❌ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 9

