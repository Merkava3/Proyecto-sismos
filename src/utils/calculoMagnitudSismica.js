class Sismologia {
  constructor(mu, A, u) {
      this.mu = mu; // Coeficiente de fricción
      this.A = A;   // Área de la superficie de ruptura en m²
      this.u = u;   // Desplazamiento promedio en metros
      this.M0 = this.calcularM0(mu, A, u); // Momento sísmico
  }

  // Método  para calcular M0
  calcularM0(mu, A, u) {
      return mu * A * u;
  }

  // Método  para calcular Mw en unidades Nm
  calcularMwNm(M0) {
      const coefLogNm = 9.1;
      return (2 / 3) * (Math.log10(M0) - coefLogNm);
  }

  // Método  para calcular Mw en unidades dina·cm
   calcularMwDinaCm(M0) {
      const coefLogDinaCm = 16.1;
      return (2 / 3) * (Math.log10(M0) - coefLogDinaCm);
  }

  // Método para obtener la magnitud de momento sísmico (Mw) en unidades Nm
  obtenerMwNm() {
      return Sismologia.calcularMwNm(this.M0);
  }

  // Método para obtener la magnitud de momento sísmico (Mw) en unidades dina·cm
  obtenerMwDinaCm() {
      const M0DinaCm = this.M0 * Math.pow(10, 7); // Convertir M0 a dina·cm
      return Sismologia.calcularMwDinaCm(M0DinaCm);
  }
}

// Ejemplo de uso
const mu = 0.3; // Coeficiente de fricción
const A = Math.pow(10, 6); // Área de la superficie de ruptura en m²
const u = 2; // Desplazamiento promedio en metros

// Crear una instancia de Sismologia
const sismo = new Sismologia(mu, A, u);

console.log("Momento sísmico (M0):", sismo.M0, "Nm");

// Obtener y mostrar la magnitud de momento sísmico (Mw) en unidades Nm
const MwNm = sismo.obtenerMwNm();
console.log("Magnitud de momento sísmico (Mw) en Nm:", MwNm);

// Obtener y mostrar la magnitud de momento sísmico (Mw) en unidades dina·cm
const MwDinaCm = sismo.obtenerMwDinaCm();
console.log("Magnitud de momento sísmico (Mw) en dina·cm:", MwDinaCm);
