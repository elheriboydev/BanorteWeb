const URL = 'https://localhost:7145/GetHome';

const PUBLICIDAD = '<div><img src="recursos/3.jpeg" alt="Publicidad incial" style="width: 100%;"></div>';
const SERVICIOS = '<div style="margin-left: 120px;"><img src="recursos/4.jpeg" alt="Servicios"></div>';
const INDICADORES = '<div style="margin-left: 60px;"><img src="recursos/5.jpeg" alt="Indicadores financieros"></div>';

var main = document.getElementById('principal');

fetch(URL)
  .then(response => {
    if (response.ok) {
      return response.json();
      console.log(response);
    } else {
      throw new Error('Error en la solicitud: ' + response.status);
    }
  })
  .then(data => {
    // Aquí puedes trabajar con los datos de la API
    console.log(data);
    var homeResponse = JSON.parse(data);

    homeResponse.homeElements.forEach(element => {
        switch (element) {
            case 1:
                main.innerHTML = main.innerHTML+PUBLICIDAD;
                break;
            case 2:
                main.innerHTML = main.innerHTML+SERVICIOS;
                break;
            case 3:
                main.innerHTML = main.innerHTML+INDICADORES;
                break;
        
            default:
                main.innerHTML = main.innerHTML+PUBLICIDAD+SERVICIOS+INDICADORES;
                break;
        }
    });
  })
  .catch(error => {
    // Aquí se maneja cualquier error que ocurra durante la solicitud
    console.error('Error: ', error);
    var homeResponse = JSON.parse('{"homeElements": [2, 1, 3]}');

    homeResponse.homeElements.forEach(element => {
        switch (element) {
            case 1:
                main.innerHTML = main.innerHTML+PUBLICIDAD;
                break;
            case 2:
                main.innerHTML = main.innerHTML+SERVICIOS;
                break;
            case 3:
                main.innerHTML = main.innerHTML+INDICADORES;
                break;
        
            default:
                main.innerHTML = main.innerHTML+PUBLICIDAD+SERVICIOS+INDICADORES;
                break;
        }
    });
  });
