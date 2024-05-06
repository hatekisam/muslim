import { Facebook, GitHub, LinkedIn, Telegram } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'

export default function Contacts() {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: 'space-evenly',
            }}>
            <IconButton
                target='_blank'
                href="https://www.facebook.com/s">
                <Facebook />
            </IconButton>

            <IconButton
                target='_blank'
                href="https://instagram.com/moustapha_iradukunda">
                <Telegram />
            </IconButton>

            <IconButton
                target='_blank'
                href="https://www.linkedin.com/in/moustapha-iradukunda">
                <LinkedIn />
            </IconButton>

            <IconButton
                target='_blank'
                href="https://github.com/iradukun">
                <GitHub />
            </IconButton>
        </Stack>
    )
}
