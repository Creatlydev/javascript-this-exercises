import hljs from '../lib/core.js'
import javascript from '../lib/javascript.js'

hljs.registerLanguage('javascript', javascript)

export default [

  {
    title: '01. ¿Cuál es la salida del siguiente código? (Nivel Principiante)',
    answer: 'La salida de este código será: Objeto global',
    explanation: 'Cuando llamas a una función directamente en el contexto global, `this` apunta al objeto global. En un navegador, eso significa `window`, y en Node.js, es `global`. Esto puede confundir a muchos, ya que podrían esperar que `this` se refiera a la función misma o que esté indefinido.',
    code: hljs.highlight(
            `function showThis() {
    console.log(this);
}
showThis();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '02. ¿Cuál es la salida del siguiente código? (Nivel Principiante)',
    answer: 'La salida de este código será: Alice',
    explanation: 'Aquí, `greet` es un método del objeto `person`. Cuando llamamos a un método, `this` se refiere al objeto desde el cual se llamó el método. Así que `this.name` se convierte en "Alice". Es fácil confundirse y pensar que `this` podría ser indefinido o referirse al contexto global, pero en este caso, `this` siempre apunta al objeto `person`.',
    code: hljs.highlight(
            `const person = {
    name: "Alice",
    greet: function () {
        console.log(this.name);
    }
};
person.greet();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '03. ¿Cuál es la salida del siguiente código? (Nivel Intermedio)',
    answer: 'La salida de este código será: undefined',
    explanation: 'Dentro de `greet`, definimos otra función llamada `innerGreet`. Cuando `innerGreet` es llamada, no es un método de `person`, sino una función regular. En este caso, `this` se refiere al objeto global, donde `this.name` es `undefined` porque `name` no es una propiedad del objeto global. La confusión usual aquí es esperar que `this` dentro de `innerGreet` apunte a `person`, pero como no se llama como método del objeto, `this` se convierte en global.',
    code: hljs.highlight(
            `const person = {
    name: "Bob",
    greet: function () {
        const innerGreet = function () {
            console.log(this.name);
        };
        innerGreet();
    }
};
person.greet();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '04. ¿Cuál es la salida del siguiente código? (Nivel Intermedio)',
    answer: 'La salida de este código será: Charlie',
    explanation: 'En este caso, `innerGreet` es una función flecha. Las funciones flecha heredan el valor de `this` del contexto en el que fueron definidas. Aquí, `innerGreet` está dentro de `greet`, así que toma el `this` de `greet`, que es `person`. Por eso, `this.name` se convierte en "Charlie". Esto puede sorprender a muchos que esperan que `this` dentro de `innerGreet` sea global, pero gracias a las funciones flecha, mantiene el `this` de `person`.',
    code: hljs.highlight(
            `const person = {
    name: "Charlie",
    greet: function () {
        const innerGreet = () => {
            console.log(this.name);
        };
        innerGreet();
    }
};
person.greet();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '05. ¿Cuál es la salida del siguiente código? (Nivel Avanzado)',
    answer: 'La salida de este código será: Dave',
    explanation: 'Aquí, `innerGreet` es una función regular, pero estamos usando `.bind(this)` para asegurar que `this` dentro de `innerGreet` sea el mismo `this` que en `greet`, que es `person`. Esto hace que `this.name` sea "Dave". Sin `.bind(this)`, `this` dentro de `innerGreet` sería `undefined` porque se refiere al objeto global. Este truco es muy útil para mantener el `this` correcto en funciones internas.',
    code: hljs.highlight(
            `const person = {
    name: "Dave",
    greet: function () {
        const innerGreet = function () {
            console.log(this.name);
        }.bind(this);
        innerGreet();
    }
};
person.greet();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '06. ¿Cuál es la salida del siguiente código? (Nivel Intermedio)',
    answer: 'La salida de este código será: undefined',
    explanation: 'La función pasada a `setTimeout` es una función regular, por lo que `this` dentro de ella no se refiere a `person`, sino al objeto global. Como `name` no es una propiedad del objeto global, `this.name` es `undefined`. Muchos se confunden esperando que `this` apunte a `person`, pero `setTimeout` ejecuta su función en un contexto diferente, cambiando `this` al global.',
    code: hljs.highlight(
            `const person = {
    name: "Eve",
    greet: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
};
person.greet();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '07. ¿Cuál es la salida del siguiente código? (Nivel Intermedio)',
    answer: 'La salida de este código será: Frank',
    explanation: 'La función pasada a `setTimeout` es una función flecha, que hereda el `this` del contexto en que fue definida. Aquí, está dentro de `greet`, así que toma el `this` de `greet`, que es `person`. Por eso, `this.name` es "Frank". Muchos esperan que `this` en la función de `setTimeout` sea global, pero gracias a las funciones flecha, el `this` se mantiene en el contexto de `person`.',
    code: hljs.highlight(
            `const person = {
    name: "Frank",
    greet: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
person.greet();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '08. ¿Cuál es la salida del siguiente código? (Nivel Avanzado)',
    answer: 'La salida de este código será: Grace',
    explanation: 'En este ejemplo, `innerGreet` es una función regular. Sin embargo, creamos una nueva función `boundGreet` utilizando `innerGreet.bind(this)`. Esto asegura que `this` dentro de `innerGreet` apunte al mismo `this` que en `greet`, es decir, al objeto `person`. Por lo tanto, `this.name` se convierte en "Grace". Esta técnica con `bind` es muy útil para mantener el contexto correcto en funciones internas y evitar que `this` se refiera al objeto global.',
    code: hljs.highlight(
            `const person = {
    name: "Grace",
    greet: function () {
        const innerGreet = function () {
            console.log(this.name);
        };
        const boundGreet = innerGreet.bind(this);
        boundGreet();
    }
};
person.greet();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '09. ¿Cuál es la salida del siguiente código? (Nivel Avanzado)',
    answer: 'La salida de este código será: Ivy',
    explanation: 'En este caso, `person.greet` se asigna a `greetFunction2`. La función `greetFunction2` es una función regular que, cuando se llama, `this` se refiere al objeto global, no a `person`. Sin embargo, usamos `bind(person)` para crear una nueva función `boundGreet` que está vinculada al objeto `person`. Esto significa que `this` dentro de `boundGreet` se refiere a `person`, así que `this.name` es "Ivy". Este uso de `bind` es útil para asegurar que el contexto de `this` se mantenga como esperas, independientemente de cómo se llame la función.',
    code: hljs.highlight(
            `const person = {
    name: "Ivy",
    greet: function () {
        console.log(this.name);
    }
};
const greetFunction2 = person.greet;
const boundGreet = greetFunction2.bind(person);
boundGreet();`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '10. ¿Cuál es la salida del siguiente código? (Nivel Avanzado)',
    answer: 'La salida de este código será: NaN',
    explanation: 'En este código, `multiply` es un método del objeto `multiplier` que recibe un número `num` y luego llama a `innerMultiply`. Sin embargo, `innerMultiply` es una función regular, y su `this` se refiere al objeto global, no al objeto `multiplier`. Esto significa que `this.factor` es `undefined` en el contexto de `innerMultiply`. Como resultado, `num * this.factor` se convierte en `num * undefined`, lo cual resulta en `NaN` (Not-a-Number). Es fácil confundir este comportamiento porque esperas que `this` dentro de `innerMultiply` se refiera al objeto `multiplier`, pero al ser una función regular, el `this` no se mantiene.',
    code: hljs.highlight(
            `const multiplier = {
    factor: 2,
    multiply: function (num) {
        const innerMultiply = function () {
            return num * this.factor;
        };
        return innerMultiply();
    }
};
console.log(multiplier.multiply(5));`,
            { language: 'javascript' }
    ).value
  },
  {
    title: '11. ¿Cuál es la salida del siguiente código? (Nivel Avanzado)',
    answer: 'La salida de este código será: 15 y NaN',
    explanation: 'En este código, `calculator` es un objeto con dos métodos: `add` y `multiply`. Cuando llamamos a `calculator.add(5)`, `this.base` se refiere al objeto `calculator`, por lo que el resultado es `5 + 10 = 15`. Sin embargo, cuando llamamos a `calculator.multiply(5)`, `innerMultiply` es una función regular, y su `this` no se refiere al objeto `calculator`, sino al objeto global. Esto significa que `this.base` es `undefined` en el contexto de `innerMultiply`. Como resultado, `num2 * this.base` se convierte en `5 * undefined`, lo cual resulta en `NaN` (Not-a-Number). La confusión puede venir de esperar que `this` se refiera a `calculator` dentro de `innerMultiply`, pero como `innerMultiply` es una función regular, pierde el contexto de `this`.',
    code: hljs.highlight(
        `const calculator = {
  base: 10,
  add: function (num) {
      return num + this.base;
  },
  multiply: function (num) {
      const innerMultiply = function (num2) {
          return num2 * this.base;
      };
      return innerMultiply(num);
  }
};
console.log(calculator.add(5)); // 15
console.log(calculator.multiply(5)); // NaN`,
        { language: 'javascript' }
    ).value
  },
  {
    title: '12. ¿Cuál es la salida del siguiente código? (Nivel Avanzado)',
    answer: 'La salida de este código será: NaN NaN NaN ...',
    explanation: 'En este código, `Counter` es una función constructora que inicializa `this.count` a `0` y luego configura un `setInterval` para incrementar `count` y mostrar su valor en la consola cada segundo. Sin embargo, dentro de la función regular de `setInterval`, `this` no se refiere al objeto `Counter`, sino al objeto global. Como resultado, `this.count` es `undefined` en ese contexto, y cuando intenta incrementar `undefined`, el resultado es `NaN`. Para mantener el contexto de `this`, podrías usar una función de flecha o almacenar `this` en una variable que esté disponible dentro de la función de `setInterval`.',
    code: hljs.highlight(
        `function Counter() {
  this.count = 0;
  setInterval(function () {
      this.count++;
      console.log(this.count);
  }, 1000);
}
const counter = new Counter();`,
        { language: 'javascript' }
    ).value
  }
]
