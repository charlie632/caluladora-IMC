//https://www.fantaproject.org/sites/default/files/resources/FANTA-BMI-charts-Jan2013-ENG_0.pdf
//http://www.imss.gob.mx/sites/all/statics/salud/tablas_imc/ninos_1a11meses_imc.pdf
const tablas_imc = {
  0: {
    min: 0,
    max: 0,
  },
  1: {
    mujer: {
      min: 7.9,
      max: 10.1
    },
    hombre:{
      min: 8.6,
      max: 11.6
    }
  },
  2: {
    mujer: {
      min: 10.2,
      max: 14.4
    },
    hombre:{
      min: 10.8,
      max: 15.0
    }
  },
  3: {
    mujer: {
      min: 12.2,
      max: 17.2
    },
    hombre:{
      min: 12.7,
      max: 17.4
    }
  },
  4: {
    mujer: {
      min: 14.0,
      max: 19.9
    },
    hombre:{
      min: 14.4,
      max: 19.9
    }
  },
  5: {
    mujer: {
      min: 11.8,
      max: 19.1
    },
    hombre:{
      min: 12.1,
      max: 18.5
    }
  },
  6: {
    mujer: {
      min: 11.7,
      max: 19.6
    },
    hombre:{
      min: 12.1,
      max: 18.8
    }
  },
  7: {
    mujer: {
      min: 11.8,
      max: 20.2
    },
    hombre:{
      min: 12.3,
      max: 19.4
    }
  },
  8: {
    mujer: {
      min: 11.9,
      max: 21.1
    },
    hombre:{
      min: 12.4,
      max: 20.2
    }
  },
  9: {
    mujer: {
      min: 12.1,
      max: 22.1
    },
    hombre:{
      min: 12.7,
      max: 21.0
    }
  },
  10: {
    mujer: {
      min: 12.4,
      max: 23.2
    },
    hombre:{
      min: 12.8,
      max: 21.5
    }
  },
  11: {
    mujer: {
      min: 12.7,
      max: 24.2
    },
    hombre:{
      min: 13.1,
      max: 23.1
    }
  },
  12: {
    mujer: {
      min: 13.2,
      max: 25.7
    },
    hombre:{
      min: 13.6,
      max: 24.3
    }
  },
  13: {
    mujer: {
      min: 13.6,
      max: 26.9
    },
    hombre:{
      min: 13.8,
      max: 25.4
    }
  },
  14: {
    mujer: {
      min: 14.0,
      max: 27.9
    },
    hombre:{
      min: 14.3,
      max: 26.0
    }
  },
  15: {
    mujer: {
      min: 14.4,
      max: 28.7
    },
    hombre:{
      min: 14.7,
      max: 27.5
    }
  },
  16: {
    mujer: {
      min: 14.6,
      max: 29.2
    },
    hombre:{
      min: 15.1,
      max: 28.4
    }
  },
  17: {
    mujer: {
      min: 14.7,
      max: 29.5
    },
    hombre:{
      min: 15.4,
      max: 29.1
    }
  },
  18: {
    mujer: {
      min: 14.7,
      max: 29.6
    },
    hombre:{
      min: 15.7,
      max: 29.3
    }
  },
  99: {
    mujer: {
      min: 19.0,
      max: 32
    },
    hombre:{
      min: 20,
      max: 40
    }
  },


}







module.exports =  {
  obtenIMC : (edad, peso, estatura, sexo) => {
    let estatura_m = estatura/100;
    let imc = peso / ( estatura_m * estatura_m);
    let imc_obj;

    if(edad < 18){
      imc_obj = tablas_imc[edad][sexo];
    }
    else{
      imc_obj = tablas_imc[99][sexo];
    }

    if(edad == 0){
      return {imc, valido: true}
    }

    if(imc > imc_obj.max || imc < imc_obj.min){
      return {imc, valido: false}
    }
    else{
      return {imc, valido: true}
    }
  }
}