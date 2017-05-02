describe("MaiorEMenor",function(){
  it("deve entender numeros nao sequenciais",function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([5,15,7,9]);
    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor()).toEqual(5);
  }),

  it("deve entender numeros crescentes",function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([5,6,7,8]);
    expect(algoritmo.pegaMaior()).toEqual(8);
    expect(algoritmo.pegaMenor()).toEqual(5);
  }),

  it("deve entender numeros decrescentes",function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([10,9,8,7]);
    expect(algoritmo.pegaMaior()).toEqual(10);
    expect(algoritmo.pegaMenor()).toEqual(7);
  }),

  it("deve entender array com um elemento",function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([9]);
    expect(algoritmo.pegaMaior()).toEqual(9);
    expect(algoritmo.pegaMenor()).toEqual(9);
  })
});
