function onInit() {
  console.log("onInit");
  activitiesFiltered = activities;
  renderActivities();
}
var activitiesFiltered = [];

var activities = [
  {
    id: "ac101",
    title: "תרגיל רעידת אדמה",
    description: "תרגיל רעידת אדמה בבי''ס אלחכמה",
    image:
      "https://i.ibb.co/YWRvMcj/Whats-App-Image-2023-03-26-at-22-08-07.jpg",
    date: "07/03/2023",
    location: "בי''ס אלחכמה",
  },
  {
    id: "ac102",
    title: "מסיבת הוכרה",
    description: "נערכה אצל בגט פארס לכבוד מתנדבי העמותה",
    image:
      "https://i.ibb.co/PZHQhhy/Whats-App-Image-2023-03-26-at-22-08-06.jpg",
    date: "15/11/2022",
    location: "בגט פארס",
  },
  {
    id: "ac103",
    title: "טקס פתיחת העמותה",
    description: "נערך טקס פתיחת העמותה והשקתה לתושבי הכפר",
    image:
      "https://i.ibb.co/GkLbZMj/Whats-App-Image-2023-03-26-at-22-08-01.jpg",
    date: "15/04/2022",
    location: "רחבת בית העם",
  },
  {
    id: "ac104",
    title: "סדרנים בפעולה",
    description: "צוות סדרנים פועל בכבישים",
    image:
      "https://i.ibb.co/Xb9yQ4t/Whats-App-Image-2023-03-26-at-22-08-04-1.jpg",
    date: "12/12/2022",
    location: "פקיעין",
  },
  {
    id: "ac105",
    title: "יום גיבוש לסדרנים",
    description: "יום גיבוש לצוות הסדרנים",
    image:
      "https://i.ibb.co/kmvCBD0/Whats-App-Image-2023-03-26-at-22-08-03.jpg",
    date: "30/11/2022",
    location: "מועדון העמותה",
  },
  {
    id: "ac106",
    title: "פגישת פתיחת העמותה",
    description: "פגישה ראשונית עם תושבי הכפר והעלאת נושא העמותה",
    image:
      "https://i.ibb.co/x32hKtz/Whats-App-Image-2023-03-26-at-22-08-01-1.jpg",
    date: "10/10/2021",
    location: "מתנ''ס פקיעין",
  },
];

var eActivities = document.querySelector(".activities");

function renderActivities() {
  var strHTML = "";
  activitiesFiltered.forEach(function (activity) {
    strHTML += `<div class="card m-1" style="width: 18rem">
        <img
          src="${activity.image}"
          class="card-img-top mt-2"
          style="width: 100%; max-height: 250px; margin: auto;"
          alt="${activity.title}"
        />
        <div class="card-body">
          <p><b>${activity.title}</b></p>
          <p class="card-text">${activity.description}</p>
          <p class="text-primary">
            <i class="bi bi-calendar3"></i> ${activity.date}
          </p>
          <p class="text-start">
            <i class="bi bi-geo-alt"></i> ${activity.location}
          </p>
        </div>
      </div>`;
  });
  eActivities.innerHTML = strHTML;
}

function onFilter() {
  var filterBy = document.querySelector(".filteredBy").value;
  console.log("onFilter", filterBy);
  activitiesFiltered = activities.filter(function (activity) {
    return (
      activity.title.toLowerCase().includes(filterBy.toLowerCase()) ||
      activity.description.toLowerCase().includes(filterBy.toLowerCase()) ||
      activity.location.toLowerCase().includes(filterBy.toLowerCase()) ||
      activity.date.toLowerCase().includes(filterBy.toLowerCase())
    );
  });
  renderActivities();
}
