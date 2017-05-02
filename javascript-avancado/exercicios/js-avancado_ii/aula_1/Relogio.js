class Relogio {

    constructor() {
        this._segundos = 0;

      /*  setInterval(function () {
            console.log(++this._segundos);
          }, 1000);*/
        setInterval(() => console.log(++this._segundos), 1000);
    }
}
