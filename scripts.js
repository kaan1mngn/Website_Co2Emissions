document.addEventListener('DOMContentLoaded', function() {
    const countryTable = document.getElementById('country-table');
    const countryRows = Array.from(countryTable.querySelectorAll('tbody tr'));
    const companyTable = document.getElementById('company-table');
    const companyRows = Array.from(companyTable.querySelectorAll('tbody tr'));

    // Funktion zum Tabellen sortieren
    const sortTable = (table, rows, columnIndex, sortType) => {
        rows.sort((rowA, rowB) => {
            let cellA, cellB;
            if (sortType === 'ascending' || sortType === 'descending') {
                cellA = parseFloat(rowA.cells[columnIndex].textContent.trim());
                cellB = parseFloat(rowB.cells[columnIndex].textContent.trim());
                return sortType === 'ascending' ? cellA - cellB : cellB - cellA;
            }
        });

        rows.forEach(row => table.querySelector('tbody').appendChild(row));
    };


    // Event Listener für Länderemissionen
    document.getElementById('country-sort').addEventListener('change', function() {
        const selectedOption = this.value;
        sortTable(countryTable, countryRows, 1, selectedOption);
    });

    // Event Listener für Unternehmensemissionen
    document.getElementById('company-sort').addEventListener('change', function() {
        const selectedOption = this.value;
        sortTable(companyTable, companyRows, 2, selectedOption);
    });

    // Event Listener für Suchleiste Länderemissionen
    document.getElementById('country-search').addEventListener('input', function() {
        const searchText = this.value.trim().toLowerCase();
        countryRows.forEach(row => {
            const countryName = row.cells[0].textContent.trim().toLowerCase();
            if (countryName.includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Event Listener für Suchleiste Unternehmensemissionen
    document.getElementById('company-search').addEventListener('input', function() {
        const searchText = this.value.trim().toLowerCase();
        companyRows.forEach(row => {
            const companyName = row.cells[0].textContent.trim().toLowerCase();
            if (companyName.includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
