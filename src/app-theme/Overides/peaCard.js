export default ({ spacing, palette, typography, breakpoints }) => ({
  MuiCard: {
    root: {
      "&.PeaEventCardSmall-root": {
        transition: "0.3s",
        margin: "auto",
        minWidth: 240,
        // boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        // '&:hover': {
        //   boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        // },
        "& > .MuiCardMedia-root": {
          paddingTop: "56.25%",
          position: "relative",
          "& .MuiCardTag-root": {
            fontFamily: typography.fontFamily,
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: spacing(1.5),
            left: spacing(1.5),
            border: "1px solid #ffffff",
            borderRadius: 4,
            padding: 4,
            backgroundColor: "rgba(0,0,0,0.38)",
            color: "#ffffff",
            fontSize: 10
          }
        },
        "& > .MuiCardContent-root": {
          textAlign: "left",
          padding: spacing(2)
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "1rem",
          marginBottom: spacing(1.5)
        },
        "& .MuiTypography--subheading": {
          lineHeight: 1.8
        },

        "& .MuiAvatar-root": {
          display: "inline-block",
          border: "2px solid white",
          "&:not(:first-of-type)": {
            marginLeft: -spacing(1)
          }
        }
      },

      "&.PeaProjectCard-root": {
        color: "#fff",
        boxSizing: "border-box",
        clear: "both",
        position: "relative",
        minWidth: "300px",
        minHeight: "350px",
        // padding: "1.5rem",
        borderRadius: "16px",
        background: "#17141d",
        // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        flexDirection: "column",
        transition: ".2s",
        margin: "0",
        transition: "0.3s",
        margin: "auto",

        "&:hover": {
          boxShadow: "-1rem 0 3rem #000"
        },
        "& > .MuiCardMedia-root": {
          paddingTop: "56.25%",
          position: "relative",
          // height: 140,
          "& .MuiCardTag-root": {
            fontFamily: typography.fontFamily,
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: spacing(1.5),
            left: spacing(1.5),
            border: "1px solid #ffffff",
            borderRadius: 4,
            padding: 4,
            backgroundColor: "rgba(0,0,0,0.38)",
            color: "#ffffff",
            fontSize: 10
          }
        },
        "& > .MuiCardContent-root": {
          textAlign: "left",
          padding: spacing(2)
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "1.2rem",
          color: palette.secondary.main,
          marginBottom: spacing(1.5)
        },
        "& .MuiTypography--subheading": {
          lineHeight: 1.8
        },
        "& .MuiTypography--paragraph": {
          fontSize: "0.9rem"
        },
        "& .MuiAvatar-root": {
          display: "inline-block",
          border: "2px solid white",
          "&:not(:first-of-type)": {
            marginLeft: -spacing(1)
          }
        }
      },
      /* member card */
      "&.PeaMemberCard-root": {
        marginTop: spacing(11),
        color: "#fff",
        overflow: "initial",
        // boxSizing: "border-box",
        clear: "both",
        position: "relative",
        minWidth: "300px",
        minHeight: "350px",
        // padding: "1.5rem",
        borderRadius: "16px",
        background: "#17141d",
        // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        flexDirection: "column",
        transition: ".2s",
        margin: "0",
        transition: "0.3s",
        margin: "auto",

        "&:hover": {
          boxShadow: "-1rem 0 3rem #000"
        },
        "& > .MuiCardMedia-root": {
          paddingTop: "56.25%",
          position: "relative",
          height: 140,

          "& .MuiCardTag-root": {
            fontFamily: typography.fontFamily,
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: spacing(1.5),
            left: spacing(1.5),
            border: "1px solid #ffffff",
            borderRadius: 4,
            padding: 4,
            backgroundColor: "rgba(0,0,0,0.38)",
            color: "#ffffff",
            fontSize: 10
          }
        },
        "& > .MuiCardContent-root": {
          // textAlign: "left",
          // padding: spacing(2)
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "1.2rem",
          color: palette.secondary.main,
          marginBottom: spacing(1.5)
        },
        "& .MuiTypography--subheading": {
          lineHeight: 1.8
        },
        "& .MuiTypography--paragraph": {
          fontSize: "0.9rem"
        },
        "& .MuiAvatar-root": {
          boxShadow: "-1rem 0 3rem #000",
          position: "relative",
          margin: "auto",
          marginBottom: -80,
          marginTop: 5,
          top: spacing(-10),
          width: spacing(20),
          height: spacing(20),
          transition: "0.3s",
          "&:hover": { transform: "translateY(-3px)" }
        },
        "& .MuiButton--viewProfile": {
          // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
          // boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",

          // paddingLeft: 24,
          // paddingRight: 24,
          // color: "#ffffff",
          borderRadius: 100,
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          height: 20,
          top: -20
        }
      },

      /* Full Profile card */
      "&.PeaFullProfileCard-root": {
        color: "#fff",
        overflow: "initial",
        // boxSizing: "border-box",
        clear: "both",
        position: "relative",
        marginTop: -70,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        minWidth: "300px",
        minHeight: "350px",
        // padding: "1.5rem",
        borderRadius: "16px",
        background: "#17141d",
        // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        flexDirection: "column",
        transition: ".2s",
        margin: "0",
        transition: "0.3s",
        margin: "auto",

        "&:hover": {
          boxShadow: "-1rem 0 3rem #000"
        },
        "& > .MuiCardMedia-root": {
          paddingTop: "56.25%",
          position: "relative",
          height: 140,

          "& .MuiCardTag-root": {
            fontFamily: typography.fontFamily,
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: spacing(1.5),
            left: spacing(1.5),
            border: "1px solid #ffffff",
            borderRadius: 4,
            padding: 4,
            backgroundColor: "rgba(0,0,0,0.38)",
            color: "#ffffff",
            fontSize: 10
          }
        },
        "& > .MuiCardContent-root": {
          // textAlign: "left",
          // padding: spacing(2)
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "1.2rem",
          color: palette.secondary.main,
          marginBottom: spacing(1.5)
        },
        "& .MuiTypography--subheading": {
          lineHeight: 1.8
        },
        "& .MuiTypography--paragraph": {
          fontSize: "0.9rem"
        },
        "& .MuiAvatar-root": {
          boxShadow: "-1rem 0 3rem #000",
          position: "relative",
          margin: "auto",
          marginBottom: -80,
          marginTop: 5,
          top: spacing(-10),
          width: spacing(20),
          height: spacing(20),
          transition: "0.3s",
          "&:hover": { transform: "translateY(-3px)" }
        },

        "& .MuiButton--viewProfile": {
          borderRadius: 100,
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          height: 20,
          top: -20
        },
        "& .MuiButton--editProfile": {
          borderRadius: "50%",
          width: 20,
          height: 20,
          position: "absolute",
          top: -20,
          right: 350,

          [breakpoints.down("sm")]: {
            right: 1
          },
          hide: {
            display: "none"
          }
        },
        "& .MuiButton--call": {
          padding: 0,
          "&:hover": {
            backgroundColor: "transparent"
          },
          "& .MuiButton-label": {
            color: "green"
          },
          "& .MuiTouchRipple-root": {
            color: "green"
          }
        },
        "& .MuiButton--twitter": {
          padding: 0,
          "&:hover": {
            backgroundColor: "transparent"
          },
          "& .MuiButton-label": {
            color: "rgb(29,161,242)"
          },
          "& .MuiTouchRipple-root": {
            color: "rgb(29,161,242)",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "block",
            zIndex: 0,
            overflow: "hidden",
            position: "absolute",
            borderRadius: "inherit",
            pointerEvents: "none"
          }
        },
        "& .MuiButton--fb": {
          border: "none",
          padding: 0,

          "&:hover": {
            backgroundColor: "transparent"
          },
          "& .MuiButton-label": {
            color: "blue"
          },
          "& .MuiTouchRipple-root": {
            color: "blue"
          }
        }
      },

      "&.PeaEventCard-root": {
        transition: "0.3s",
        margin: "auto",
        minWidth: 375,
        maxWidth: 500,
        // boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        // '&:hover': {
        //   boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        // },
        "& > .MuiCardMedia-root": {
          paddingTop: "56.25%",
          position: "relative",
          "& .MuiCardTag-root": {
            fontFamily: typography.fontFamily,
            display: "flex",
            alignItems: "center",
            border: "1px solid #ffffff",
            borderRadius: 4,
            padding: 4,
            backgroundColor: "rgba(0,0,0,0.38)",
            color: "#ffffff",
            fontSize: 10
          }
        },
        "& > .MuiCardContent-root": {
          textAlign: "left",
          padding: spacing(2)
        },
        "> * span.MuiCardHeader-title": {
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "5rem !important",
          marginBottom: spacing(1.5)
        },

        "& .MuiTypography--heading": {
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "3rem",
          marginBottom: spacing(1.5)
        },
        "& .MuiTypography--subheading": {
          lineHeight: 1.8
        },
        "& .MuiAvatar-root": {
          display: "inline-block",
          border: "2px solid white",
          "&:not(:first-of-type)": {
            marginLeft: -spacing(1)
          }
        }
      },
      "&.PodCard-root": {
        transition: "0.3s",
        margin: "auto",
        minWidth: 240,
        // boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        // '&:hover': {
        //   boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        // },
        "& > .MuiCardMedia-root": {
          paddingTop: "56.25%",
          position: "relative",
          "& .MuiCardTag-root": {
            fontFamily: typography.fontFamily,
            display: "flex",
            alignItems: "center",
            border: "1px solid #ffffff",
            borderRadius: 4,
            padding: 4,
            backgroundColor: "rgba(0,0,0,0.38)",
            color: "#ffffff",
            fontSize: 10
          }
        },
        "& > .MuiCardContent-root": {
          textAlign: "left",
          padding: spacing(2)
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "1rem",
          marginBottom: spacing(1.5)
        },
        "& .MuiTypography--subheading": {
          lineHeight: 1.8
        },
        "& .MuiAvatar-root": {
          display: "inline-block",
          border: "2px solid white",
          "&:not(:first-of-type)": {
            marginLeft: -spacing(1)
          }
        }
      },
      "&.PeaProfileCard-root": {
        minWidth: 300,
        "& > .MuiCardMedia-root": {
          paddingTop: "40%",
          position: "relative",
          backgroundColor: palette.grey[200],
          "& .MuiAvatar-root": {
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            transform: "translateY(32%)",
            left: spacing(1.5),
            border: "2px solid #ffffff"
          }
        },
        "& > .MuiCardContent-root": {
          paddingTop: spacing(1)
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "1rem"
        },
        "& .MuiTypography--subheading": {
          color: palette.text.secondary,
          marginBottom: spacing(1.5),
          textAlign: "left",
          fontSize: 12
        },
        "& .PeaProfileCard-actions": {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }
      },
      "&.PeaFullProfile-root": {
        position: "relative",
        "& .MuiCardMedia-root": {
          paddingTop: "44%",
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: 1,
          backgroundColor: palette.grey[200],
          [breakpoints.up("sm")]: {
            paddingTop: "32%"
          }
        },
        "& .MuiAvatar-root-profilePic": {
          width: 84,
          height: 84,
          alignItems: "center",
          transform: "translateY(-60%)",
          left: 0,
          border: "4px solid #ffffff",
          zIndex: 3,
          [breakpoints.up("sm")]: {
            width: 104,
            height: 104,
            left: spacing(1.5)
          }
        },
        "& .PeaFullProfile-profileImgBtn": {
          display: "flex",
          flexDirection: "column",
          transform: "translateY(-60%)",
          left: 0,
          borderRadius: "50%",
          [breakpoints.up("sm")]: {
            left: spacing(1.5)
          },
          "& .MuiAvatar-root-profilePic": {
            "&:after": {
              background: "rgba(0,0,0,0.4)",
              content: '" "',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            },
            zIndex: 0,
            transform: "none",
            left: 0
          }
        },
        "& .PeaFullProfile-coverImgBtn": {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          background: "rgba(0,0,0,0.6)",
          "& .material-icons": {
            fontSize: 48
          }
        },
        "& .MuiCardContent-root": {
          position: "relative",
          textAlign: "left",
          zIndex: 2,
          background: palette.common.white,
          marginTop: "36%",
          borderRadius: spacing(2),
          [breakpoints.up("sm")]: {
            marginTop: "24%"
          }
        }
      },
      "&.PeaAccountProfile-root": {
        position: "relative",
        width: "100%",
        "& > .MuiCardMedia-root": {
          paddingTop: "44%",
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: 1,
          backgroundColor: palette.grey[200],
          [breakpoints.up("sm")]: {
            paddingTop: "32%"
          }
        },
        "& .MuiAvatar-root-profilePic": {
          width: 96,
          height: 96,
          alignItems: "center",
          transform: "translateY(-60%)",
          left: 0,
          border: "4px solid #ffffff",
          zIndex: 3,
          [breakpoints.up("sm")]: {
            width: 104,
            height: 104,
            left: spacing(1.5)
          }
        },
        "& .PeaAccountProfile-profileImgBtn": {
          display: "flex",
          flexDirection: "column",
          transform: "translateY(-60%)",
          left: 0,
          borderRadius: "50%",
          [breakpoints.up("sm")]: {
            left: spacing(1.5)
          },
          "& .MuiAvatar-root-profilePic": {
            "&:after": {
              background: "rgba(0,0,0,0.4)",
              content: '" "',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            },
            zIndex: 0,
            transform: "none",
            left: 0
          }
        },
        "& .PeaAccountProfile-coverImgBtn": {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          background: "rgba(0,0,0,0.6)",
          "& .material-icons": {
            fontSize: 48
          }
        },
        "& > .MuiCardContent-root": {
          position: "relative",
          textAlign: "left",
          zIndex: 2,
          background: palette.common.white,
          marginTop: "36%",
          borderRadius: spacing(2),
          [breakpoints.up("sm")]: {
            marginTop: "24%"
          },
          "& .MuiGrid-container.-actions": {
            justifyContent: "space-between",
            [breakpoints.up("sm")]: {
              justifyContent: "flex-end",
              "& .MuiButton-root.-shape-chubby": {
                minWidth: 120
              }
            }
          },
          "& .MuiGrid-item.-reputation": {
            flexGrow: 1,
            [breakpoints.up("sm")]: {
              flexGrow: "unset"
            },
            "& .MuiTypography-root": {
              [breakpoints.up("sm")]: {
                marginTop: 16
              }
            }
          }
        },
        "& .PeaPodCard-root": {
          boxShadow: "none"
        }
      },
      "&.PeaPodCard-root": {
        textAlign: "left",
        "& > .MuiCardMedia-root": {
          paddingTop: "40%",
          position: "relative"
        },
        "& > .MuiCardContent-root": {
          paddingBottom: 16
        },
        "& .MuiTypography--heading": {
          paddingBottom: 16,
          fontSize: 16,
          fontWeight: "bold"
        },
        "& .PeaPodCardPeople-root": {
          paddingTop: 16
        },
        "& .PeaPodCardPeople-people": {
          display: "flex",
          alignItems: "center",
          "&:not(:first-of-type)": {
            marginTop: 8
          }
        }
      },
      "&.PeaPersonCard-root": {
        margin: "auto",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        [breakpoints.up("sm")]: {
          display: "flex"
        },
        "& .MuiCardMedia-root": {
          backgroundColor: palette.grey[200],
          [breakpoints.only("xs")]: {
            paddingBottom: "56.25%"
          },
          [breakpoints.up("sm")]: {
            paddingRight: 160
          },
          "& .PeaPersonCard-avator": {
            position: "relative",
            // margin: "auto",
            left: "50%"
          }
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          padding: spacing(2),
          "& .MuiListItem-root": {
            padding: 0,
            paddingBottom: spacing(2)
          },
          "& .PeaPersonCard-bio": {
            "& b": {
              color: palette.secondary.main
            }
          }
        },
        "& .material-icons": {
          marginTop: 3
        }
      },
      "&.PeaUserCard-root": {
        minWidth: 288,
        textAlign: "left",
        "& .MuiCardMedia-root": {
          paddingTop: "40%",
          position: "relative",
          backgroundColor: palette.grey[200],
          "& .MuiAvatar-root": {
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            transform: "translateY(32%)",
            left: spacing(1.5),
            border: "2px solid #ffffff"
          }
        },
        "& .PeaUserCard-actions": {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }
      },
      "&.PeaGroupProfile-root": {
        position: "relative",
        textAlign: "left",
        "& .MuiCardMedia-root": {
          paddingTop: "44%",
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: 1,
          backgroundColor: palette.grey[200],
          [breakpoints.up("sm")]: {
            paddingTop: "40%"
          }
        },
        "& .MuiCardContent-root": {
          position: "relative",
          textAlign: "left",
          zIndex: 2,
          background: palette.common.white,
          marginTop: "36%",
          borderRadius: spacing(2),
          [breakpoints.up("sm")]: {
            marginTop: "36%"
          },
          "& .MuiTabs-root": {
            marginLeft: -16,
            marginRight: -16,
            width: "auto",
            minWidth: 500
          }
        },
        "& .MuiCardActions-root": {
          position: "relative",
          zIndex: 3,
          boxShadow: "0 0 8px 0 rgba(0,0,0,0.12)",
          "& .MuiInputBase-root": {
            padding: "0 16px",
            borderRadius: 20,
            backgroundColor: palette.grey[100],
            flexGrow: 1,
            minHeight: 40
          }
        }
      },

      "&.MuiPostCard--02": {
        borderRadius: spacing.unit * 2, // 16px
        background: "#17141d",
        color: "#fff",
        boxSizing: "border-box",
        clear: "both",

        transition: "0.3s",
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        width: "95%",
        position: "relative",
        maxWidth: 800,
        marginLeft: "auto",
        overflow: "initial",

        display: "flex",
        alignItems: "center",
        padding: `${spacing.unit * 2}px 0`,
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
        },
        "& .MuiCardMedia-root": {
          flexShrink: 0,
          width: "40%",
          paddingTop: "48%",
          transform: "translateX(-12%)",
          boxShadow: "4px 4px 20px 1px rgba(252, 56, 56, 0.2)",
          borderRadius: spacing.unit * 2, // 16
          // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
          backgroundColor: palette.common.white,
          overflow: "hidden",
          "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
            borderRadius: spacing.unit * 2, // 16
            opacity: 0.5
          }
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          paddingLeft: 0,
          padding: spacing.unit * 2
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold"
        },
        "& .MuiTypography--subheading": {
          marginBottom: spacing.unit * 2
        },
        "& .MuiButton--readMore": {
          backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
          boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
          borderRadius: 100,
          paddingLeft: 24,
          paddingRight: 24,
          color: "#ffffff"
        }
      }
    }
  },

  MuiCardActions: {
    root: {
      "&.MuiCardActions--primary": {
        backgroundColor: palette.primary.main,
        "& .MuiButton-root, .MuiButton--auto": {
          borderRadius: 4
        },
        "& .MuiCardActions-left": {},
        "& .MuiCardActions-right": {
          marginLeft: "auto"
        }
      },
      "&.MuiCardActions--centered": {
        justifyContent: "center"
      }
    }
  },
  MuiCardHeader: {
    content: {
      textAlign: "left"
    }
  }
});
