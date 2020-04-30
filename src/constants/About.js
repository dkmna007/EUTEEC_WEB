export const Constants = () => {
  const appLogo = "/assets/images/techlogo.png";

  const activities = [
    {
      date: "9 Mar 2019",
      title: "Dedan Kimathi University Hakathon 2019",
      content:
        "Project Manager (Peter Kabaria) with team members(Kelvin Maina and Samuel Njoroge) posing for a photo in Dedan Kimathi University Hakathon 2019",
      image: "/assets/images/kevo.JPG"
    },
    {
      date: "5 May 2018",
      title: "Environmental Innovation Day",
      content:
        "EUTEEC TEAM after demonstrating the functionalities of Smart Dustbin technology on Environmental Innovation Day",
      image: "/assets/images/table.jpg"
    },
    {
      date: "28 Feb 2019",
      title: "Embedded systems",
      content:
        "Embedded systems and components. Some of the boards and microcontrollers used",
      image: "/assets/images/jose.jpg"
    }
  ];

  const partners = [
    {
      PartnerName: "CO-ELIB",
      Logo: ""
    },
    {
      PartnerName: "ENACTUS KENYA",
      Logo: ""
    },
    {
      PartnerName: "INTEL",
      Logo: ""
    },
    {
      PartnerName: "MICROSOFT",
      Logo: ""
    },
    {
      PartnerName: "MALKIA",
      Logo: ""
    },
    {
      PartnerName: "EESA",
      Logo: ""
    }
  ];

  const staticAbout = {
    Title: "About Us",
    Title2: "OUR PARTNERS",
    headerSubTitle:
      " Meet the amazing team behind this project and find out more about how we work.",
    Current: "About",
    subtitle: "LOCATION",
    subtitle2: "OUR TEAM"
  };
  //About/ membership
  const membership = {
    Title1: "Club Members discusing ongoing Projects",
    Title2: "  MEMBERSHIP",
    Img: "/assets/images/guys.jpg",
    Paragraph1:
      "To join us please pay KSH 200 through our treasurer for Registration and Click the Sign in Button The Admin shall approve your request and add you.We pay a renewal fee of KSH.50 per Semester.Please comply with our Terms. ALL MEMBERS FROM THE FACULTY OF ENGINEERING ECEN DEPARTMENT ARE WELCOMED"
  };
  const euteecDescription =
    "Egerton University Technology Enthusiast Engineers Club is an association of Electrical and Control Engineering students within the faculty of Engineering. We are responsible for most of the projects that involve automation, programming, sensor integration,modelling and simulation. It is a union of the most competent students ranging from the fresh minds of first years to the experienced finalists in fifth year not forgetting the alumni and graduates.";

  return {
    activities,
    partners,
    staticAbout,
    membership,
    euteecDescription,
    appLogo
  };
};
