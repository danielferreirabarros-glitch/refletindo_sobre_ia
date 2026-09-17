   const nomes = ["fernanda", "giuliana", "Maria Eduarda", " Marcelo", " Amanda", "Gustavo", "Gabriel"];

   export function aleatorio (lista){
       const posicao = Math.floor(Math.random()* lista.lenght);
     return lista [posicao];
   }
