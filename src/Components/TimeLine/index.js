import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import traduction from "./traduction"
import { useContext } from "react"
import { LanguageContext } from "../../contextLang"



export default function AboutTimeline() {
    const { language } = useContext(LanguageContext)
    return (
        <Timeline position="alternate" className='fs-6 fs-md-5'>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {traduction[language].timeLineDate1}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" className='fs-6 fs-md-5'>
                        {traduction[language].timeLineTitle1}
                    </Typography>
                    <Typography className='fs-6 fs-md-5'>{traduction[language].timeLineSubtitle1}</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    className='fs-6 fs-md-5'
                >
                    {traduction[language].timeLineDate2}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography className='fs-6 fs-md-5' variant="h6" component="span">
                        {traduction[language].timeLineTitle2}
                    </Typography>
                    <Typography className='fs-6 fs-md-5'>{traduction[language].timeLineSubtitle2}</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    className='fs-6 fs-md-5'
                >
                    {traduction[language].timeLineDate3}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <LocalGroceryStoreIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" className='fs-6 fs-md-5'>
                        {traduction[language].timeLineTitle3}
                    </Typography>
                    <Typography className='fs-6 fs-md-5'>{traduction[language].timeLineSubtitle3}</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    className='fs-6 fs-md-5'
                >
                    {traduction[language].timeLineDate4}
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" className='fs-6 fs-md-5'>
                        {traduction[language].timeLineTitle4}
                    </Typography>
                    <Typography className='fs-6 fs-md-5'>{traduction[language].timeLineSubtitle4}</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}