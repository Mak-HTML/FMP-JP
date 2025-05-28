var mobiles = {
    iphone: {
      iphone7: {
        processor: "Snapdragon 8 Gen 2",
        memory: { ram: 12, storage: 512 },
        camera: {
          rear: { main: 200, ultrawide: 12, telephoto: 10, telephotoPeriscope: 10 },
          front: 10
        },
        brand: "iphone",
        battery: 5000,
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
      },
      iphone8: {
        processor: "Snapdragon 12 Gen 5",
        memory: { ram: 8, storage: 256 },
        brand: "iphone",
        camera: {
          rear: { main: 180, ultrawide: 15, telephoto: 10, telephotoPeriscope: 20 },
          front: 12
        },
        battery: 8000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
      },
      iphone8plus: {
        processor: "Snapdragon 5 Gen 6",
        memory: { ram: 8, storage: 128 },
        brand: "iphone",
        camera: {
          rear: { main: 160, ultrawide: 18, telephoto: 10, telephotoPeriscope: 8 },
          front: 16
        },
        battery: 5000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
      },
      iphoneX: {
        processor: "Snapdragon 5 Gen 4",
        memory: { ram: 8, storage: 256 },
        brand: "iphone",
        camera: {
          rear: { main: 130, ultrawide: 16, telephoto: 10, telephotoPeriscope: 18 },
          front: 14
        },
        battery: 6000,
        operatingSystem: "iphone X",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
      },
      iphone11: {
        processor: "Snapdragon 7 Gen 9",
        memory: { ram: 16, storage: 512 },
        brand: "iphone",
        camera: {
          rear: { main: 150, ultrawide: 24, telephoto: 16, telephotoPeriscope: 10 },
          front: 20
        },
        battery: 10000,
        operatingSystem: "iphone 11",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
      }
    },
    xiomi: {
      redmiA2: { modelName: "Mi 12 Pro", processor: "Snapdragon 8 Gen 1", brand: "xiomi", memory: { ram: 8, storage: 256 }, battery: 4600 },
      redmi10: { modelName: "Mi 8 Pro", processor: "Snapdragon 7 Gen 5", brand: "xiomi", memory: { ram: 12, storage: 256 }, battery: 5000 },
      redmi11: { modelName: "Mi 14 Pro", processor: "Snapdragon 8 Gen 4", brand: "xiomi", memory: { ram: 12, storage: 512 }, battery: 8000 },
      redmi12: { modelName: "Mi 12 Pro", processor: "Snapdragon 12 Gen 1", brand: "xiomi", memory: { ram: 12, storage: 512 }, battery: 8000 },
      redmi13: { modelName: "Mi 14 Pro", processor: "Snapdragon 8 Gen 6", brand: "xiomi", memory: { ram: 12, storage: 256 }, battery: 10000 },
      redmi13C: { modelName: "Mi 14 Pro", processor: "Snapdragon 9 Gen 5", brand: "xiomi", memory: { ram: 12, storage: 512 }, battery: 10000 }
    },
    realme: {
      realmiNote50: { brand: "Realme", model: "hypothetical model", processor: "Snapdragon 8 Gen 1", memory: { ram: "8GB", storage: "128GB" }, battery: "5000mAh" },
      realmiC67: { brand: "Realme", model: "hypothetical model", processor: "Snapdragon 6 Gen 4", memory: { ram: "8GB", storage: "256GB" }, battery: "5000mAh" },
      realmiC53: { brand: "Realme", model: "hypothetical model", processor: "Snapdragon 8 Gen 6", memory: { ram: "12GB", storage: "128GB" }, battery: "8000mAh" },
      realmi9: { brand: "Realme", model: "hypothetical model", processor: "Snapdragon 9 Gen 6", memory: { ram: "12GB", storage: "256GB" }, battery: "10000mAh" },
      realmi9i: { brand: "Realme", model: "hypothetical model", processor: "Snapdragon 8 Gen 1", memory: { ram: "12GB", storage: "512GB" }, battery: "2000mAh" }
    },
    samsung: {
      samsung_Galaxy_S24: { brand: "Samsung", model: "Galaxy S24 Ultra", processor: "Snapdragon 8 Gen 2", memory: { ram: 12, storage: 512 }, battery: 5000 },
      samsung_Galaxy_S51: { brand: "Samsung", model: "Galaxy S51 Pro", processor: "Snapdragon 9 Gen 4", memory: { ram: 8, storage: 128 }, battery: 8000 },
      samsung_Galaxy_Prime: { brand: "Samsung", model: "Galaxy Prime Ultra", processor: "Snapdragon 8 Gen 10", memory: { ram: 4, storage: 64 }, battery: 5000 },
      samsung_Galaxy_S46: { brand: "Samsung", model: "Galaxy S46 Ultra", processor: "Snapdragon 8 Gen 2", memory: { ram: 6, storage: 64 }, battery: 20000 },
      samsung_Galaxy_S77: { brand: "Samsung", model: "Galaxy S77 Ultra", processor: "Snapdragon 12 Gen 24", memory: { ram: 12, storage: 512 }, battery: 20000 }
    }
  };
  
  const brandSelect = document.getElementById("brand");
  const modelSelect = document.getElementById("model");
  const resultDiv = document.getElementById("result");
  

  for (let brand in mobiles) {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand.toUpperCase();
    brandSelect.appendChild(option);
  }
  

  brandSelect.addEventListener("change", function () {
    modelSelect.innerHTML = `<option value="">-- Select Model --</option>`;
    const selectedBrand = this.value;
  
    if (selectedBrand) {
      for (let model in mobiles[selectedBrand]) {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      }
    }
  });
  
  function searchMobile() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
  
    if (!brand || !model) {
      resultDiv.innerHTML = "<p style='color:red'>Please select both brand and model.</p>";
      return;
    }
  
    const data = mobiles[brand][model];
    let output = `<strong>Brand:</strong> ${data.brand || brand}<br>`;
    output += `<strong>Model:</strong> ${model}<br><hr>`;
  
    for (let key in data) {
      output += `<strong>${key}:</strong> ${JSON.stringify(data[key])}<br>`;
    }
  
    resultDiv.innerHTML = output;
  }
  