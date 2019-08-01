import { lighten, darken, getLuminance } from 'polished';

function getLitgherOrDarker(color) {
  const l = getLuminance(color);
  if (l > 0.6) {
    return darken(l / 2, color);
  }
  return lighten((1 - l) / 2, color);
}

export default function headerStyles(classPrefix, variables) {
  return {
    'cancel-link': {
      background: 'transparent',
      border: 'none',
      color: getLitgherOrDarker(variables.shepherdThemeTextColor),
      fontSize: '2em',
      fontWeight: 'normal',
      margin: 0,
      padding: 0,
      position: 'relative',
      textDecoration: 'none',
      transition: 'color 0.5s ease',
      verticalAlign: 'middle',
      '&:hover': {
        color: variables.shepherdThemeTextColor,
        cursor: 'pointer'
      },
      [`.${classPrefix}shepherd-has-title .${classPrefix}shepherd-content &`]: {
        color: getLitgherOrDarker(variables.shepherdThemeTextHeader),
        '&:hover': {
          color: variables.shepherdThemeTextHeader
        }
      }
    },

    header: {
      alignItems: 'center',
      borderTopLeftRadius: variables.shepherdElementBorderRadius,
      borderTopRightRadius: variables.shepherdElementBorderRadius,
      display: 'flex',
      justifyContent: 'flex-end',
      lineHeight: '2em',
      padding: '0.75em 0.75em 0',
      [`.${classPrefix}shepherd-has-title .${classPrefix}shepherd-content &`]: {
        background: variables.shepherdHeaderBackground,
        padding: '1em'
      }
    },

    title: {
      color: variables.shepherdThemeTextHeader,
      display: 'flex',
      flex: '1 0 auto',
      fontSize: '1.1em',
      fontWeight: 'normal',
      margin: 0,
      padding: 0,
      position: 'relative',
      verticalAlign: 'middle'
    }
  };
}
