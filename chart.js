var chart1 = new CanvasJS.Chart("chartContainer1", {
  animationEnabled: true,

  title: {
    text: "Growth of employers sign up",
    fontSize: 24,
    padding: 16,
    fontFamily: "Arial",
    fontWeight: "bold"
  },

  // dataPointWidth: 32,
  axisX: {
    interval: 1
  },
  axisY2: {
    interlacedColor: "rgba(1,77,101,.03)",
    gridColor: "rgba(1,77,101,.1)"
    //title: "Number of Companies"
  },
  data: [
    {
      type: "line",
      name: "companies",
      axisYType: "secondary",
      indexLabelPlacement: "outside",
      indexLabel: "{y}",

      color: "#014D65",
      dataPoints: [
        {
          y: 60,
          label: "2018 Q1"
        },
        {
          y: 71,
          label: "2018 Q2"
        },
        {
          y: 98,
          label: "2018 Q3"
        },
        {
          y: 50,
          label: "2018 Q4"
        },
        {
          y: 58,
          label: "2019 Q1"
        }
      ]
    }
  ]
});

var chart2 = new CanvasJS.Chart("chartContainer2", {
  animationEnabled: true,

  title: {
    text: "Growth of app downloads",
    fontSize: 24,
    padding: 16,
    fontFamily: "Arial",
    fontWeight: "bold"
  },
  axisX: {
    interval: 1
  },
  axisY2: {
    interlacedColor: "rgba(1,77,101,.03)",
    gridColor: "rgba(1,77,101,.1)"
    //title: "Number of Companies"
  },
  data: [
    {
      type: "line",
      indexLabelPlacement: "outside",
      indexLabel: "{y}",
      name: "companies",
      axisYType: "secondary",
      color: "#014D65",
      dataPoints: [
        {
          y: 3553,
          label: "2018 Q1"
        },
        {
          y: 6207,
          label: "2018 Q2"
        },
        {
          y: 6823,
          label: "2018 Q3"
        },
        {
          y: 5013,
          label: "2018 Q4"
        },
        {
          y: 13697,
          label: "2019 Q1"
        }
      ]
    }
  ]
});

var chart3 = new CanvasJS.Chart("chartContainer3", {
  animationEnabled: true,

  title: {
    text: "Growth of users who broadcast for jobs",
    fontSize: 24,
    padding: 16,
    fontFamily: "Arial",
    fontWeight: "bold"
  },
  axisX: {
    interval: 1
  },
  axisY2: {
    interlacedColor: "rgba(1,77,101,.03)",
    gridColor: "rgba(1,77,101,.1)"
    //title: "Number of Companies"
  },
  data: [
    {
      type: "line",
      name: "companies",
      axisYType: "secondary",
      color: "#014D65",
      indexLabelPlacement: "outside",
      indexLabel: "{y}",
      dataPoints: [
        {
          y: 0,
          label: "2018 Q1"
        },
        {
          y: 287,
          label: "2018 Q2"
        },
        {
          y: 1198,
          label: "2018 Q3"
        },
        {
          y: 918,
          label: "2018 Q4"
        },
        {
          y: 2592,
          label: "2019 Q1"
        }
      ]
    }
  ]
});

var chart4 = new CanvasJS.Chart("chartContainer4", {
  animationEnabled: true,

  title: {
    text: "Growth of job applications processed",
    fontSize: 24,
    padding: 16,
    fontFamily: "Arial",
    fontWeight: "bold"
  },
  axisX: {
    interval: 1
  },
  axisY2: {
    interlacedColor: "rgba(1,77,101,.03)",
    gridColor: "rgba(1,77,101,.1)"
    //title: "Number of Companies"
  },
  data: [
    {
      type: "line",
      name: "companies",
      axisYType: "secondary",
      color: "#014D65",
      indexLabelPlacement: "outside",
      indexLabel: "{y}",
      dataPoints: [
        {
          y: 1950,
          label: "2018 Q1"
        },
        {
          y: 4206,
          label: "2018 Q2"
        },

        {
          y: 6229,
          label: "2018 Q3"
        },

        {
          y: 7104,
          label: "2018 Q4"
        },

        {
          y: 17580,
          label: "2019 Q1"
        }
      ]
    }
  ]
});

var chart5 = new CanvasJS.Chart("chartContainer5", {
  animationEnabled: true,

  title: {
    text: "Growth of jobs created",
    fontSize: 24,
    padding: 16,
    fontFamily: "Arial",
    fontWeight: "bold"
  },
  axisX: {
    interval: 1
  },
  axisY2: {
    interlacedColor: "rgba(1,77,101,.03)",
    gridColor: "rgba(1,77,101,.1)"
    //title: "Number of Jobs Published"
  },
  data: [
    {
      type: "line",
      name: "companies",
      axisYType: "secondary",
      color: "#014D65",
      indexLabelPlacement: "outside",
      indexLabel: "{y}",

      dataPoints: [
        {
          y: 647,
          label: "2018 Q1"
        },
        {
          y: 835,
          label: "2018 Q2"
        },
        {
          y: 895,
          label: "2018 Q3"
        },
        {
          y: 1116,
          label: "2018 Q4"
        }
      ]
    }
  ]
});

chart1.render();
chart2.render();
chart3.render();
chart4.render();
chart5.render();
