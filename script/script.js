
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

    FooterSocialLink:[

      {
        label:"fab fa-facebook-square",
        url:"https://it.wikipedia.org/wiki/Facebook",
        description: "facebook"
      },
      {
        label:"fab fa-twitter",
        url:"https://it.wikipedia.org/wiki/Twitter",
        description: "twitter"

      },
      {
        label:"fab fa-instagram",
        url:"https://it.wikipedia.org/wiki/Instagram",
        description: "instagram"
      },
      {
        label:"fab fa-linkedin",
        url:"https://it.wikipedia.org/wiki/LinkedIn",
        description: "linkedIn"
      },

    ],

    footerLinkExploreA: [

      {
        label:"Start Here",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(quarta_stagione)"
      },
      {
        label:"Blog",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(quinta_stagione)"
      },
      {
        label:"About Us",
        url:"https://it.wikipedia.org/wiki/El_Camino_-_Il_film_di_Breaking_Bad"
      },

    ],

    footerLinkExploreB:[

      {
        label:"Success story",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(prima_stagione)"
      },
      {
        label:"Courses",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(seconda_stagione)"
      },
      {
        label:"Contact Us",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(terza_stagione)"
      },

    ],

    footerLinkInfo:[

      {
        label:"Membership",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(prima_stagione)"
      },
      {
        label:"Purchase guide",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(seconda_stagione)"
      },
      {
        label:"Privacy policy",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(terza_stagione)"
      },
      {
        label:"Terms of service",
        url:"https://it.wikipedia.org/wiki/Episodi_di_Breaking_Bad_(prima_stagione)"
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
