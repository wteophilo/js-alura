class DataHelper{
  textoParaData(texto){
    return texto..split("-").map((item,indice)=>item - indice % 2)
  }

  dataParaTexto(data){
    return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
  }
}
