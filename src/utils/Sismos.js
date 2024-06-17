class Sismos {  
  constructor(amplitud, diferencia) {
        this._amplitud = amplitud;
        this._diferencia = diferencia;
    }
    force() {
        let magnitud = 0;
        let num1 = Math.log10(this._amplitud);
        let num2 = 8 * this._diferencia;
        let num3 = 3 * Math.log10(num2);
        magnitud = num1 + (num3 - 2.92);
        return magnitud;
    }     
}
export default Sismos