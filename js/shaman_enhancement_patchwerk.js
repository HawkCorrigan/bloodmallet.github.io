Highcharts.chart('shaman_enhancement_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                150811,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                9182,
                7776,
                8392,
                7057,
                4051,
                9746,
                8131,
                9792,
                8698,
                6717,
                8601,
                8202,
                7391,
                7998,
                6978,
                9249,
                8310,
                9021,
                8956,
                8466,
                8199,
                6590,
                7348,
                8264,
                7871,
                6320,
                5749,
                7440,
                7844,
                0,
                3079,
                4973,
                0,
                4684,
                2784,
                1847,
                4959,
                4186,
                2223,
                8267,
                2659,
                1758,
                2903,
                1498,
                698,
                1147
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                9749,
                8869,
                8108,
                8471,
                8318,
                8852,
                7078,
                9819,
                6476,
                6498,
                7771,
                5588,
                6950,
                7806,
                7931,
                9529,
                7000,
                6934,
                8777,
                7860,
                6935,
                6825,
                6939,
                7786,
                7230,
                6584,
                5488,
                5843,
                6858,
                0,
                1987,
                4068,
                0,
                4172,
                5574,
                4363,
                3120,
                2809,
                3431,
                6366,
                3854,
                2509,
                1195,
                3218,
                1774,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                6381,
                8017,
                6203,
                8084,
                3941,
                9709,
                6278,
                8034,
                7182,
                7165,
                5748,
                7219,
                7097,
                6729,
                6783,
                7168,
                7258,
                5585,
                7117,
                7072,
                4719,
                4528,
                4207,
                5884,
                7745,
                4942,
                5277,
                5040,
                6193,
                0,
                4665,
                5203,
                0,
                4564,
                1989,
                2343,
                4004,
                2907,
                2961,
                4171,
                3009,
                2323,
                3939,
                2230,
                1688,
                1934
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                7492,
                6350,
                6059,
                6049,
                4835,
                6996,
                7895,
                6692,
                7449,
                6609,
                5983,
                6456,
                4765,
                6161,
                7697,
                6609,
                4777,
                6346,
                6918,
                8294,
                6524,
                5273,
                5843,
                6583,
                4733,
                3786,
                4367,
                5484,
                6077,
                0,
                2561,
                4234,
                0,
                2018,
                3266,
                2046,
                3171,
                2331,
                2753,
                5433,
                1416,
                2817,
                1801,
                1003,
                2597,
                1877
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                6508,
                6275,
                7288,
                5467,
                5149,
                7288,
                4834,
                77147,
                4914,
                6148,
                6455,
                5691,
                5745,
                5229,
                4140,
                5790,
                5199,
                5780,
                4911,
                4339,
                4485,
                4525,
                5424,
                5364,
                5249,
                5581,
                5312,
                5475,
                5841,
                5707,
                2777,
                3053,
                4800,
                4046,
                2829,
                3205,
                3270,
                2084,
                2995,
                4413,
                2098,
                2556,
                0,
                1978,
                1186,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                4441,
                84649,
                4388,
                5029,
                1824,
                6883,
                4531,
                0,
                76603,
                4243,
                4947,
                4634,
                4630,
                5772,
                4596,
                7518,
                5763,
                4400,
                64754,
                6147,
                5938,
                3997,
                4106,
                6311,
                3881,
                61370,
                4219,
                5527,
                4286,
                6145,
                2090,
                3644,
                4127,
                49369,
                4096,
                1614,
                2628,
                2089,
                2215,
                4685,
                1472,
                1248,
                3096,
                2666,
                2030,
                818
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                80608,
                0,
                81074,
                78075,
                90017,
                64785,
                74004,
                0,
                0,
                70267,
                67694,
                69261,
                69984,
                66713,
                67568,
                58864,
                66041,
                66013,
                0,
                55525,
                60451,
                64406,
                60307,
                48855,
                52261,
                0,
                56942,
                52429,
                49375,
                67802,
                58425,
                49145,
                63349,
                0,
                47895,
                51856,
                45487,
                45042,
                38754,
                20802,
                38203,
                37640,
                33004,
                32042,
                31916,
                29322
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-07 06:42:01"
    },
    title: {
        text: "Shaman - Enhancement - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Bloodthirsty Instinct",
            "Eye of Command",
            "Unstable Arcano Crystal",
            "Six-Feather Fan",
            "Stat Stick (Haste)",
            "Specter of Betrayal",
            "Engine of Eradication",
            "Entwined Elemental Foci",
            "Thrice-Accursed Compass",
            "Memento of Angerboda",
            "Stat Stick (Mastery)",
            "Chrono Shard",
            "PVP Badge of Conquest",
            "Nightblooming Frond",
            "Nightmare Egg Shell",
            "Stat Stick (Crit)",
            "Vial of Ceaseless Toxins",
            "Tempered Egg of Serpentrix",
            "Gift of Radiance",
            "Convergence of Fates",
            "Horn of Valor",
            "Arcanogolem Digit",
            "Tirathon's Betrayal",
            "Infernal Cinders",
            "PVP Insignia of Conquest",
            "Splinters of Agronax",
            "Bloodstained Handkerchief",
            "Darkmoon Deck: Dominion",
            "Spontaneous Appendages",
            "Faulty Countermeasure",
            "Infernal Alchemist Stone",
            "Umbral Moonglaives",
            "Toe Knee's Promise",
            "Nature's Call",
            "The Devilsaur's Bite",
            "Spiked Counterweight",
            "Terrorbound Nexus",
            "Draught of Souls",
            "Tiny Oozeling in a Jar",
            "Ravaged Seed Pod",
            "Mark of Dargrul",
            "Giant Ornamental Pearl",
            "Windscar Whetstone",
            "Ley Spark"
        ]
    },
    yAxis: {
        labels: {
            enabled: true
        },
        min: 0,
        stackLabels: {
            enabled: false,
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});