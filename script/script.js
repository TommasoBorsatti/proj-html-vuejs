
const App = new Vue ({

  el: "#root",

  data: {

    mainNavLinks:[

      {
        label:"Home",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(prima_stagione)"
      },
      {
        label:"Pages",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(seconda_stagione)"
      },
      {
        label:"Courses",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(terza_stagione)"
      },
      {
        label:"Features",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(quarta_stagione)"
      },
      {
        label:"Blog",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(quinta_stagione)"
      },
      {
        label:"Shop",
        url:"https://it.wikipedia.org/wiki/El_Camino_-_Il_film_di_Breaking_Bad"
      },

    ],

    customerAreaLinks:[

      {
        label: "far fa-user-circle",
        url: "https://it.wikipedia.org/wiki/Episodi_de_I_segreti_di_Twin_Peaks_(seconda_stagione)",
      },

    ],

    searchInput:"",
    emailInput:"",

  },

  methods: {

    mySearch: function(){
      console.log(this.searchInput);
      this.searchInput="";
    },

    myMail: function(){
      console.log(this.emailInput);
      this.emailInput="";
    }

  },

});
