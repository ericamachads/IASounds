// 107
function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AfSKAbmnb/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
      console.error(error);
  } else {
      console.log(results);
      const random_number_r = Math.floor(Math.random() * 255) + 1;
      const random_number_g = Math.floor(Math.random() * 255) + 1;
      const random_number_b = Math.floor(Math.random() * 255) + 1;
      const resultLabel = document.getElementById("result_label");
      const resultConfidence = document.getElementById("result_confidence");

      resultLabel.innerHTML = 'I can hear - ' + results[0].label;
      resultConfidence.innerHTML = 'Confidence - ' + (results[0].confidence * 100).toFixed(2) + " %";
      resultLabel.style.color = `rgb(${random_number_r},${random_number_g},${random_number_b})`;
      resultConfidence.style.color = `rgb(${random_number_r},${random_number_g},${random_number_b})`;

      const img = document.getElementById('alien1');
      const img1 = document.getElementById('alien2');
      const img2 = document.getElementById('alien3');
      const img3 = document.getElementById('alien4');

      if (results[0].label == "Claps") {
          img.src = 'aliens-01.gif';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.png';
      } else if (results[0].label == "Bell") {
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.gif';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.png';
      } else if (results[0].label == "Snaps") {
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.gif';
          img3.src = 'aliens-04.png';
      } else {
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.gif';
      }
  }
}
