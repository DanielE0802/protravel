import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Logo from '../../img/logo_horizontal.png'
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import { ColumnToRow, Item } from '@mui-treasury/components/flex';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from '@mui-treasury/components/menu/category';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';

import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';
import { useReadyEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/ready';

const darkTheme = createMuiTheme({ palette: { type: 'dark' } });

const useStyles = makeStyles(({ palette, typography }) => ({
  top: {
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  middle: {
    backgroundColor: palette.type === 'dark' ? '#192D36' : palette.action.hover,
  },
  bottom: {
    backgroundColor:
      palette.type === 'dark' ? '#0F2128' : palette.action.selected,
  },
  newsletterText: {
    color: '#fff',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
  },
  form: {
    margin: 0,
    minWidth: 343,
    fontSize: '0.875rem',
  },
  legalLink: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    justifyContent: 'center',
    color: palette.text.hint,
    letterSpacing: '0.5px',
  },
  divider: {
    height: 2,
    margin: '-1px 0',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    filter: 'grayscale(80%)',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  info: {
    ...typography.caption,
    color: palette.text.hint,
    marginTop: 8,
  }
}));

const FooterDemo = React.memo(function ArcAppFooter() {
  const classes = useStyles();
  return (
    
      <Box width={'100%'}>
        <Box px={2} py={6} className={classes.top} position={'relative'}>
          <div className={classes.overlay}>
            <img
              src={
                'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80'
              }
              alt={''}
            />
          </div>
          <ThemeProvider theme={darkTheme}>
            <ColumnToRow
              at={'sm'}
              cssPosition={'relative'}
              columnStyle={{ alignItems: 'center', textAlign: 'center' }}
              rowStyle={{ justifyContent: 'center' }}
              gap={{ xs: 2, sm: 3, md: 4 }}
              wrap
            >
              
              <Item>
                <EmailSubscribe
                  className={classes.form}
                  onSubmit={email => alert(`Your email is ${email}.`)}
                  useStyles={useReadyEmailSubscribeStyles}
                  inputClearedAfterSubmit
                >
                  <EmailTextInput placeholder="Ingresa tu correo electronico" />
                  <SubmitButton>Subscribete</SubmitButton>
                </EmailSubscribe>
              </Item>
            </ColumnToRow>
          </ThemeProvider>
        </Box>
        <Box px={2} py={10} className={classes.middle}>
          <Container disableGutters>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4} lg={3}>
                <Box
                  component={'img'}
                  mt={-3}
                  width={190}
                  height={84}
                  src={Logo}
                  alt=""
                  borderRadius={12}
                />

                <Typography className={classes.info}>
                  <p index={1}>
                  info@protravel.tech
                  </p>
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <p>Productos</p>
                      </CategoryTitle>
                      <CategoryItem>
                        <p index={1}>Planea tu viaje</p>
                      </CategoryItem>
                      <CategoryItem>
                        <p index={1}>Destinos</p>
                      </CategoryItem>
                      <CategoryItem>
                        <p index={1}>Variedades</p>
                      </CategoryItem>
                      <CategoryItem>
                        <p index={1}>Comunidad</p>
                      </CategoryItem>
                      <CategoryItem>
                        <p index={1}>Promos</p>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <p>Informacion</p>
                      </CategoryTitle>
                      <CategoryItem>
                        <p index={1}>Perguntas y Respuestas</p>
                      </CategoryItem>
                      <CategoryItem>
                        <p index={1}>Aliados: ProTalento</p>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <p>Acerca de</p>
                      </CategoryTitle>
                      <CategoryItem>
                        <p index={1}>Contacto</p>
                      </CategoryItem>
                      <CategoryItem>
                        <p index={1}>Equipo</p>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8} lg={3} style={{ marginLeft: 'auto' }}>
                <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                  <CategoryTitle>
                    <p>Subscribete</p>
                  </CategoryTitle>
                </CategoryProvider>
                <SocialProvider useStyles={usePoofSocialLinkStyles}>
                  <a href='https://mail.google.com/mail/u/0/#inbox'><SocialLink brand={'Envelope'} /></a>
                  <a href='https://www.linkedin.com/company/protravel2021/'><SocialLink brand={'LinkedIn'} /></a>
                  <a href='https://www.instagram.com/protravel01/'><SocialLink brand={'Instagram'} /></a>
                </SocialProvider>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container disableGutters>
          <Divider className={classes.divider} />
        </Container>
        <Box px={2} py={3} className={classes.bottom}>
          <Container disableGutters>
            <ColumnToRow
              at={'md'}
              columnStyle={{ alignItems: 'center' }}
              rowStyle={{ alignItems: 'unset' }}
            >
              
              <Item style={{ margin: 'auto'}}>
                <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                  <Typography
                    component={'p'}
                    variant={'caption'}
                    color={'textSecondary'}
                  >
                    <p index={1} >
                      Copyright© ProTravel 2021
                    </p>
                  </Typography>
                </Box>
              </Item>
            </ColumnToRow>
          </Container>
        </Box>
      </Box>

  );
});


export default FooterDemo