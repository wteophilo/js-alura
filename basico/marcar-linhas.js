var trs = document.getElementsByTagName("tr");
percorreArray(trs , function(trAtual){
  trAtual.addEventListener("mouseover",function(){
    this.setAttribute("bgcolor","black");
  });

  trAtual.addEventListener("mouseout",function(){
    this.setAttribute("bgcolor","white");
  });
});
