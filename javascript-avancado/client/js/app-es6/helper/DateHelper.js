export class DateHelper {

    constructor(){
      throw new Error("Você não pode criar uma instancia dessa classe");
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
      //if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
      if(!/\d{2}\/\d{2}\/\d{4}/.test(texto)){
        throw new Error('Deve estar no formato aaaa-mm-dd');
      }
      return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
    }

  }
