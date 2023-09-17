// Sample JSON data
const jsonData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Alice', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 35, city: 'Chicago' }
];

// Function to convert JSON to CSV
function convertToCSV(jsonData) {
    const headers = Object.keys(jsonData[0]);
    const csvRows = [];

    // Add headers as the first row
    csvRows.push(headers.join(','));

    // Add data rows
    for (const row of jsonData) {
        const values = headers.map(header => {
            const escaped = String(row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
}

// Function to download CSV file
function downloadCSV(csvData, fileName) {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (navigator.msSaveBlob) {
        // For IE 10 and above
        navigator.msSaveBlob(blob, fileName);
    } else {
        // For other browsers
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}

