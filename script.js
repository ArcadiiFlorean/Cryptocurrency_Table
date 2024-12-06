const apiUrl = "https://api.coincap.io/v2/assets";

async function fetchAndDisplayData() {
  try {
    // Fetch data from the CoinCap API
    const response = await fetch(apiUrl);
    const { data } = await response.json(); // CoinCap API returns the data inside a `data` key

    // Reference the table body
    const tableBody = document.querySelector(".table__section table tbody");

    // Loop through the data (limit it to avoid overloading the table)
    data.slice(0, 10).forEach((asset) => {
      const row = document.createElement("tr");

      // Create cells for each piece of data
      const assetCell = document.createElement("td");
      assetCell.innerHTML = `
                <img class="coint__img" src="https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png" alt="${
        asset.name
      }" />
                ${asset.name}
            `;

      const marketSizeCell = document.createElement("td");
      marketSizeCell.textContent = `$ ${Number(asset.marketCapUsd).toFixed(2)}`;

      const totalBorrowedCell = document.createElement("td");
      totalBorrowedCell.textContent = `$ ${Number(asset.supply).toFixed(2)}`;

      const depositApyCell = document.createElement("td");
      depositApyCell.textContent = `${(Math.random() * 5).toFixed(2)}%`; // Example APY values

      const borrowApyCell = document.createElement("td");
      borrowApyCell.textContent = `${(Math.random() * 5).toFixed(2)}%`; // Example APY values

      const actionsCell = document.createElement("td");
      const priceCell = document.createElement("td");
      priceCell.textContent = `$ ${Number(asset.priceUsd).toFixed(2)}`;

      // Append cells to the row
      row.appendChild(assetCell);
      row.appendChild(marketSizeCell);
      row.appendChild(totalBorrowedCell);
      row.appendChild(depositApyCell);
      row.appendChild(borrowApyCell);
      row.appendChild(actionsCell);
      row.appendChild(priceCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to populate the table
fetchAndDisplayData();
