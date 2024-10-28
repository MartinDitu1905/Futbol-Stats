// app.js
const apiKey = "39cb82cb23msh7d9d0edf38abefdp1d9a8cjsn3b80168c8e64"
const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

async function getLiveScores() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpiar contenido anterior

    data.response.forEach(match => {
      const { teams, goals } = match;
      const result = document.createElement('p');
      result.textContent = `${teams.home.name} ${goals.home} - ${goals.away} ${teams.away.name}`;
      resultsDiv.appendChild(result);
    });
  } catch (error) {
    console.error('Error al obtener resultados:', error);
    document.getElementById('results').textContent = 'Error al cargar resultados.';
  }
}

getLiveScores();
