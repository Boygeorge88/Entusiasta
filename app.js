
document.getElementById('compare-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const año = document.getElementById('año').value;
  document.getElementById('resultado-comparador').innerText = `Comparando ${marca} ${modelo} del ${año} con el mercado... (demo)`;
});

function enviarPregunta() {
  const pregunta = document.getElementById('ia-input').value;
  document.getElementById('ia-response').innerText = "Pensando...";
  fetch("https://api.huggingface.co/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 535ed17c2a21497680e5a621e23318bb",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "HuggingChat/chat-ui",
      messages: [{ role: "user", content: pregunta }]
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('ia-response').innerText = data.choices?.[0]?.message?.content || "No se pudo obtener respuesta.";
  })
  .catch(err => {
    document.getElementById('ia-response').innerText = "Error al conectar con la IA.";
  });
}

// Noticias de muestra
document.getElementById("news-container").innerHTML = "<ul><li>Nissan presenta su nuevo GT-R eléctrico.</li><li>BMW lanza serie M con motor híbrido.</li></ul>";
