import _ from 'lodash'
import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import typography from './typography'

const baseOptions = {
  typography,
  overrides: {
    MuiSelect: {
      selectMenu: {
        height: '12px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'auto',
      },
      select: {
        border: '1px solid #00ffff',
        '&:focus': {
          borderRadius: '4px',
        },
      },
    },

    MuiFormLabel: {
      root: { color: '#222' },
      colorSecondary: {
        '&.Mui-focused': {
          color: '#222',
        },
      },
    },
    MuiList: {
      padding: {
        padding: '10px',
      },
    },
    MuiListSubheader: {
      root: {
        color: '#000000',
        fontSize: '22px !important',
        fontWeight: '600 !important',
        lineHeight: '33px !important',
      },
    },

    MuiOutlinedInput: {
      root: {
        position: 'relative',
        borderRadius: '4px',
        marginTop: '7px',
      },
      colorSecondary: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          color: '#222',
          borderColor: '#222',
        },
        '&.Mui-focused': {
          color: '#222',
        },
      },
      // notchedOutline: {
      //   borderColor: "transparent",
      // },
    },
    MuiPaper: {
      root: {
        color: '#52565c',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
      outlined: {
        padding: '20px',
        width: '100%',
      },
    },
    MuiPopover: {
      root: {
        zIndex: 99999,
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: 0,
      },
    },
    MuiCheckbox: {
      root: {
        padding: '4px',
        fontSize: '12px',
      },
      colorSecondary: {
        '&.Mui-checked': { color: '#000' },
      },
    },

    MuiFormControlLabel: {
      root: {
        paddingBottom: '0',
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
      },
    },
    MuiDialog: {
      paperScrollPaper: {
        maxWidth: '460px!important',
        boxShadow: '1px 2px 6px rgb(0 0 0 / 25%) !important',
        borderRadius: '8px!important',
        backgroundColor: 'rgb(250 250 250 / 94%)',
      },
      paper: {
        overflowY: 'unset',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: 18,
        // color: "#fff",
        border: '1px solid #00ffff',
      },
    },
    MuiBackdrop: {
      root: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
    },
    MuiButton: {
      root: {
        fontSize: '18px',
        color: '#00ffff',
        '@media only screen and (max-width:768px)': {
          minWidth: '40px',
        },
        '&.Mui-disabled': {
          color: '#000',
          // backgroundColor: '#ccc',
        },
      },

      containedSizeLarge: {
        fontSize: '25px',
        paddingLeft: '30px',
        paddingRight: '30px',
        padding: '8px 0px',
        '@media only screen and (max-width:768px)': {
          fontSize: '14px',
          paddingLeft: '10px',
          paddingRight: '10px',
          margin: '8px',
          minWidth: '40px',
        },
      },

      containedSecondary: {
        backgroundColor: '#00ffff',
        color: 'rgb(255, 255, 255)',
        fontsize: '30px',
        borderRadius: '3px',
        filter: 'brightness(100%)',
        opacity: '1',
        transform: 'translate(0px, 0px)',
        visibility: 'visible',

        '&:hover': {
          backgroundColor: '#00ffff !important',
        },
      },

      containedPrimary: {
        backgroundColor: '#000',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        color: '#F3994A',
        border: '1px solid #F3994A',
        fontSize: '30px',
        height: '45px',
        lineHeight: ' 65px',
        padding: '10px 39px',
        marginRight: '10px',
        textTransform: 'uppercase',
        fontWeight: ' 500',
        '&:hover': {
          backgroundColor: '#F3994A',
          color: '#000',
        },
      },
      contained: {
        borderRadius: '50px',
        color: '#f30065',
        fontWeight: 500,
        padding: '5px 19px',

        '&:hover': {
          backgroundColor: '#000',
          color: '#fff',
        },
        '&.Mui-disabled': {
          color: '#e7d7d7',
          backgroundColor: '#962f2f',
        },
      },
      outlinedPrimary: {
        borderRadius: '50px',
        color: '#300760',
        fontWeight: 500,
        padding: '5px 19px',
        border: '2px solid #300760',
        '&:hover': {
          backgroundColor: '#f30065',
          border: '2px solid #f30065',
          color: '#000',
        },
      },
      outlinedSizeSmall: {
        padding: '6px 23px',
        fontSize: '30px',
        lineHeight: ' 65px',
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: '0',
      },
    },
    MuiMenu: {
      paper: { top: '47px' },
    },

    MuiTypography: {
      subtitle1: {
        color: '#000',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: ' 16px',
        colorSecondary: {
          color: '#8d8989',
        },
      },
    },
  },
}

const themesOptions = {
  typography: {
    fontWeight: 400,
  },
  palette: {
    type: 'light',
    action: {
      primary: '#20509e',
    },
    background: {
      default: '#FBFBFD',
      dark: '#f3f7f9',
      paper: colors.common.white,
    },
    primary: {
      main: '#898989',
      dark: '#de0d0d',
      light: '#de0d0d',
    },
    secondary: {
      main: '#fff',
    },
    warning: {
      main: '#ffae33',
      dark: '#ffae33',
      light: '#fff1dc',
    },
    success: {
      main: '#54e18c',
      dark: '#54e18c',
      light: '#e2faec',
    },
    error: {
      main: '#ff7d68',
      dark: '#ff7d68',
      light: '#ffe9e6',
    },
    text: {
      primary: '#52565c',
      secondary: '#999999',
    },
    common: {
      black: '#222222',
    },
  },
}

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions))

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
