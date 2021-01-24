// Contact form
$(document).ready(function () {
  $(".form-control").click(function () {
    $(this).parent().addClass("label-animate");
  });

  $(window).click(function () {
    if (!$(event.target).is(".form-control")) {
      $(".form-control").each(function () {
        if ($(this).val() == "") {
          $(this).parent().removeClass("label-animate");
        }
      });
    }
  });
});

// Chart options
const options = {
  chart: {
    height: "720px",
    width: "100%",
    type: "bar",
    foreColor: "#fff",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  series: [
    {
      name: "Projects",
      data: [5, 8, 3, 2, 2, 10, 3, 7],
    },
  ],
  xaxis: {
    categories: [
      "Vanilla Js",
      "React.js",
      "Node.js",
      "PHP",
      "Laravel",
      "Graphics Design",
      "UI/UX Design",
      "Video Editing",
    ],
  },
  fill: {
    colors: ["#fd294e"],
  },
  dataLabels: {
    enabled: false,
  },

  title: {
    text: "Our Projects by Technologies",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px",
    },
  },
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();
