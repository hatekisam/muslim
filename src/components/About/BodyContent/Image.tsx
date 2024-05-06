import { CardMedia } from '@mui/material';
import { useMemo } from 'react';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { Data } from '../types';

type Props = Readonly<Pick<Data, "avatar_url">>;

export default function Image({ avatar_url }: Props) {
    const { theme } = useThemeContext();
    const imageStyle = useMemo(() => ({
        width: 200,
        height: 200,
        borderRadius: '50%',
        margin: 'auto',
        filter: theme.dropShadow,
        border: '2px solid',
        borderColor: theme.colors.primary.main,
    }), [theme]);

    return (
        <CardMedia
            component="img"
            src={avatar_url}
            alt="Moustapha Iradukunda"
            sx={imageStyle} />
    )
}
