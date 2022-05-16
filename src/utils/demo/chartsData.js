export const doughnutLegends = [
  { title: "Shirts", color: "bg-blue-500" },
  { title: "Shoes", color: "bg-teal-600" },
  { title: "Bags", color: "bg-purple-600" },
  { title: "Wow", color: "bg-green-600" },
];

export const lineLegends = [
  { title: "Organic", color: "bg-teal-600" },
  { title: "Paid", color: "bg-purple-600" },
];

export const barLegends = [
  { title: "Shoes", color: "bg-teal-600" },
  { title: "Bags", color: "bg-purple-600" },
];

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [30, 20, 30, 20],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ["#0694a2", "#1c64f2", "#7e3af2", "#0e9f6e"],
        label: "Dataset 1",
      },
    ],
    labels: ["Shoes", "Shirts", "Bags", "Wow"],
  },
  options: {
    responsive: true,
    cutoutPercentage: 50,
  },
  legend: {
    display: false,
  },
};

export const lineOptions = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Organic",
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: "#0694a2",
        borderColor: "#0694a2",
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: false,
      },
      {
        label: "Paid",
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: "#0e9f6e",
        borderColor: "#0e9f6e",
        data: [24, 50, 64, 74, 52, 51, 65],
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
    },
  },
  legend: {
    display: false,
  },
};

export const barOptions = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Shoes",
        backgroundColor: "#0694a2",
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: "Bags",
        backgroundColor: "#7e3af2",
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
};
