// Blood Stock Distribution Chart
const ctx = document.getElementById('bloodStockChart').getContext('2d');
const bloodStockChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        datasets: [{
            label: 'Available Units',
            data: [120, 80, 150, 70, 200, 90, 100, 60],
            backgroundColor: ['#1e88e5', '#d32f2f', '#388e3c', '#fbc02d', '#7b1fa2', '#ff7043', '#1976d2', '#ef5350']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
