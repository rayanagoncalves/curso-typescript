// Exemplo 1 => Enums Numéricos
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Frances"] = 2] = "Frances";
    Idioma[Idioma["Ingles"] = 3] = "Ingles";
})(Idioma || (Idioma = {}));
console.log(Idioma);
