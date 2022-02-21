
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMenu, getRestaurantDetails } from '../../utils/api';
import { Header } from '../../components/header';
import { Restaurant } from '@mui/icons-material';
import { RestaurantInfo } from './restaurant-info';

export const DetailsPage = () => {
    
    const {id} = useParams();
    const [menu, setMenu]=useState({});
    const [details, setDetails] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const { response } = await getMenu(id);
            const menuList = {};
            for (let menuItem of response) {
                if(!menuList[menuItem.group]) menuList[menuItem.group] = [menuItem]
                else menuList[menuItem.group].push(menuItem)
            }
            setMenu(menuList);
        };
        const fetchDetails = async () => {
            const { response } = await getRestaurantDetails(id);
            setDetails(response)
        }
        fetchDetails().catch(err => console.log(err));
        fetch().catch(err => console.log(err));        
    },[id])

    return ( 
    <div>
        <Header/>
        {details && <RestaurantInfo hours={details.hours} img={details.image} name={details.name}/>}
        {Object.keys(menu).map((group, index) => (        
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{group}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {menu && menu[group].map((menuItem, i) => <div key={i}>{JSON.stringify(menuItem)}</div>)}
                </Typography>
            </AccordionDetails>
        </Accordion>
        ))}
    </div>
    )
}