import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import '../scss/destinos.scss';




const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '90%',
        margin: 'auto',
        borderRadius: 12,
        padding: 12,
    },
    media: {
        borderRadius: 6,
    },
}));

export const MusicCardDemo = React.memo(function MusicCard() {
    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN04TextInfoContentStyles();
    const shadowStyles = useOverShadowStyles({ inactive: true });
    return (
        <div>
            <Card className={cx(styles.root, shadowStyles.root)}>
                <CardMedia
                    className={cx(styles.media, mediaStyles.root)}
                    image={
                        'https://cdn1.matadornetwork.com/blogs/2/2017/03/COLOMBIA_santuariodelaslajas.jpg'
                    }
                />
                <CardContent>
                    <TextInfoContent
                        classes={textCardContentStyles}
                        overline={'Colombia'}
                        heading={'Ciudad'}
                        body={
                            'Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general '
                        }
                    />
                </CardContent>
            </Card>
            <Card className={cx(styles.root, shadowStyles.root)}>
                <CardContent>
                    <TextInfoContent
                        classes={textCardContentStyles}
                        overline={'Colombia'}
                        heading={'Ciudad'}
                        body={
                            'Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general Informacion general '
                        }
                    />
                </CardContent>
                <CardMedia
                    className={cx(styles.media, mediaStyles.root)}
                    image={
                        'https://www.viajesyfotografia.com/wp-content/uploads/2018/02/guatape-13h31m28s136.jpg'
                    }
                />
            </Card>
        </div>
    );
});
export default MusicCardDemo