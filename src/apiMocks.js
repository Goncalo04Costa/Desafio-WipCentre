// src/apiMocks.js

export function fetchMenu() {
  return Promise.resolve({
    success: true,
    data: ["PM", "PK", "AC", "KS"],
  });
}

export function fetchPKDropdowns() {
  return Promise.resolve({
    success: true,
    customer: [
      { "001": "WIP" },
      { "025": "IPCA" }
    ],
    certification: [
      { "001": "GOTS" },
      { "002": "BLUE" },
      { "003": "GREEN" }
    ],
    unit: [
      { "001": "UN" },
      { "002": "PK" },
      { "003": "PAIR" },
    ],
    currency: [
      { "001": "EUR" },
      { "002": "USD" },
      { "003": "JPY" },
      { "004": "GBP" },
    ],
    sustComp: [
      { "001": "ECO" },
      { "002": "WOOL" },
      { "003": "GRTXT" },
    ],
  });
}

export function fetchBrandByCustomer(customerId) {
  if (customerId === "001") {
    return Promise.resolve({
      success: true,
      data: [
        { "001": "WIPTech Pro" },
        { "253": "WIPTech Ultra" },
        { "563": "WIPTech Standard" },
      ],
    });
  } else if (customerId === "025") {
    return Promise.resolve({
      success: true,
      data: [
        { "009": "IPCA 1" },
        { "632": "IPCA 2" },
      ],
    });
  } else {
    return Promise.resolve({ success: false, data: [] });
  }
}

export function fetchColorByBrand(brandId) {
  const colors = {
    "001": [
      { "002": "Pure Red" },
      { "006": "Soft White" },
      { "009": "Sunset Orange" },
    ],
    "253": [
      { "025": "Pure Red" },
      { "085": "Soft White" },
    ],
    "563": [
      { "001": "Black" },
      { "002": "White" },
    ],
    "009": [
      { "001": "Green" },
      { "002": "White" },
    ],
    "632": [
      { "001": "Green" },
      { "002": "White" },
    ],
  };

  return Promise.resolve({
    success: true,
    data: colors[brandId] || [],
  });
}
