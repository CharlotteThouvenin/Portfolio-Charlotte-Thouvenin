import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import './style.scss'
import { Button } from 'react-bootstrap';
import { MyVerticallyCenteredModal } from '../Modal';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='mw-100'>
            <Box >
                <Masonry columns={3} spacing={3}>
                    {itemData.map((item, index) => (
                        <div className='card' key={index}>
                            <div className='card-shadow'>
                                <Button onClick={() => setModalShow(true)}>En savoir plus</Button>
                            </div>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <Label>{item.title}</Label>
                            <img
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=162&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    display: 'block',
                                    width: '100%',
                                }}
                            />
                        </div>
                    ))}
                </Masonry>
            </Box>
        </div>

    );
}



const itemData = [
    {
        img: './Bank1.png',
        title: 'Argent Bank',
        description: ""
    },
    {
        img: 'Bluel1.webp',
        title: 'Sophie Buel',
        description: ""
    },
    {
        img: './Ohmyfood1.jpg',
        title: 'Oh my food',
        description: ""
    },
    {
        img: './Nina.png',
        title: 'Nina Carducci',
        description: ""
    },
    {
        img: './Kasa2.png',
        title: 'Kasa',
        description: ""
    }

];