import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


function InfoBox({info}) {
   const INIT_URL = "https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   const Hot_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   const Cold_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const Rainy_URL = "https://images.unsplash.com/photo-1636414795389-2cd7bb362560?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div className="InfoBox">
      <div className='CardContainer'>

       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? Rainy_URL :info.temp > 15 ? Hot_URL : Cold_URL }
        title="green iguana"
      />

      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
              info.humidity > 80 
              ? <ThunderstormIcon/> 
              :info.temp > 15 
              ? <WbSunnyIcon/> : 
              <AcUnitIcon/>
              }
          
        </Typography>

        <Typography variant="body2" color="text.secondary" component={"span"}>
        </Typography>

        <p>temperature = {info.temp}</p>
        <p>humidity = {info.humidity}</p>
        <p>Min temp = {info.tempMin}</p>
        <p>Max temp = {info.tempMax}</p>

        <p>
        The weather can be describe as <i>{info.weather}</i> and feels like = {info.feels_like}&deg;C
        </p>

      </CardContent>

    </Card>

    </div>
    </div>
  );
}

export default InfoBox;