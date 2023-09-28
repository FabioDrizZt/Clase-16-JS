// Espera a que se cargue el documento HTML
document.addEventListener("DOMContentLoaded", function () {
  // Obtén una referencia al elemento canvas
  var ctx = document.getElementById("miGrafico").getContext("2d");

  // Define los datos para el gráfico
  var data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Ventas Mensuales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configura las opciones del gráfico
  var options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Crea el gráfico de barras
  var myChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
});
