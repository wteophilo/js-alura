class MaiorEMenor{
  constructor(){
    this._maior = Number.MIN_VALUE;
    this._menor = Number.MAX_VALUE
  }

  encontra(nums){
      nums.forEach((num)=>{
        if(num<this._menor) this._menor = num;
        if (num> this._maior) this._maior = num;
      });
  }

  pegaMenor(){
    return this._menor;
  }

  pegaMaior(){
    return this._maior;
  }

}


/*function MaiorEMenor(){
  var maior;
  var menor;
  var clazz =  {

    encontra : function(nums){
      menor = Number.MAX_VALUE;
      maior = Number.MIN_VALUE;
      nums.forEach(function(num){
        if(num<menor) menor = num;
        if (num>maior) maior = num;
      })
    },

    pegaMenor: function(){return menor;},
    pegaMaior : function(){return maior;}
  };

  return  clazz
}
*/
