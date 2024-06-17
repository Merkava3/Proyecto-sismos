function formatDate(dateString) {
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const daysOfWeek = [
    "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"
  ];

  const date = new Date(dateString);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedDate = `${dayOfWeek}, ${day} de ${month} de ${year}, ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

  return formattedDate;
}

 export function sortObj (data) {
    const coords = data.map(data => ({ 
        Title: data.title,
        City: data.city === ""? "cerca de la ciudad" : data.city,
        Subnational: data.subnational == ""? "zona cercana" : data.subnational,
        Date: formatDate(data.date), 
        Magnitude: data.magnitude,
        url: data.url,     
        locations: [          
           parseFloat(data.latitude),
           parseFloat(data.longitude)          
        ] 
                 
        }));      
       return coords;    
  
}
export function sortObjCrtls(name, data){ 
 return name !== "LatestEarthquakeNearMe" ? sortObj(data) : MyLocation(data)  
}

export const MyLocation = (data) => {
  const coords = data.map(data => ({
  title: data.title,
  date:formatDate(data.date),
  url:data.url,
  })) 
  return coords;
}


export const generateUrl = (requeriments, name) => { 
  console.log(name)
  console.log("control de requerimiento url")
  const MapUrl = {
    "RecentEarthquakes":`https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&start=${requeriments.start}&count=${requeriments.count}&type=earthquake&latitude=${requeriments.latitude}&longitude=${requeriments.longitude}&radius=${requeriments.radius}&units=${requeriments.units}&magnitude=${requeriments.magnitude}&intensity=${requeriments.intensity}`,
    "Earthquakes":`https://everyearthquake.p.rapidapi.com/earthquakes?start=${requeriments.start}&count=${requeriments.count}&type=earthquake&latitude=${requeriments.latitude}&longitude=${requeriments.longitude}&radius=${requeriments.radius}&units=${requeriments.units}&magnitude=${requeriments.magnitude}&intensity=${requeriments.intensity}`,
    "EarthquakesByDate":`https://everyearthquake.p.rapidapi.com/earthquakesByDate?startDate=${requeriments.startDate}&endDate=${requeriments.endDate}&start=${requeriments.start}&count=${requeriments.count}&type=earthquake&latitude=${requeriments.latitude}&longitude=${requeriments.longitude}&radius=${requeriments.radius}&units=${requeriments.units}&magnitude=${requeriments.magnitude}&intensity=${requeriments.intensity}`,
    "LatestEarthquakeNearMe":`https://everyearthquake.p.rapidapi.com/latestEarthquakeNearMe?latitude=${requeriments.latitude}&longitude=${requeriments.longitude}`,
    "AllEarthquakes,PastHour":`https://everyearthquake.p.rapidapi.com/all_hour.json`,
    "AllEarthquakes,PastDay":`https://everyearthquake.p.rapidapi.com/all_day.json`,
    "AllEarthquakes,Past7Days":`https://everyearthquake.p.rapidapi.com/4.5_week.json`,
    "AllEarthquakes,Past30Days":`https://everyearthquake.p.rapidapi.com/4.5_month.json`,      
  }
  
  console.log(MapUrl[name])
 return MapUrl[name] ?? "N/A"
}