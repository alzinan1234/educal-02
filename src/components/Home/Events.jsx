const Events = () => {
  const events = [
    {
      id: 1,
      title: "Digital transformation conference",
      date: "2022-12-25",
      time: "10:00 am - 12:00 pm",
      location: "New York",
      description: "View More ->",
    },
    {
      id: 2,
      title: "Artificial intelligence conference",
      date: "2022-11-30",
      time: "11:00 am - 1:00 pm",
      location: "Mindahan",
      description: "View More ->",
    },
    {
      id: 3,
      title: "Blockchain conference",
      date: "2022-12-15",
      time: "12:00 pm - 2:00 pm",
      location: "Weedpatch",
      description: "View More ->",
    },
    {
      id: 4,
      title: "Cybersecurity conference",
      date: "2022-11-20",
      time: "1:00 pm - 3:00 pm",
      location: "Lnland",
      description: "View More ->",
    },
    {
      id: 5,
      title: "Data privacy conference",
      date: "2022-12-05",
      time: "2:00 pm - 4:00 pm",
      location: "Lnland",
      description: "View More ->",
    },
  ];

  return (
    <div className="mb-10 mt-10">
      <div className="container mx-auto p-4 ">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 ">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex  justify-between items-center hover:border-x-8 border-x-blue-600  transition-all duration-400  bg-white shadow-md p-6 rounded-lg  "
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-sm sm:text-base mb-2">
                  <p>{event.date}</p>
                  <p>|</p>
                  <p>{event.time}</p>
                  <p>|</p>
                  <p>{event.location}</p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold hover:text-blue-600 transition duration-300">
                    {event.title}
                  </h2>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-blue-500 font-medium hover:text-blue-700 transition duration-300 cursor-pointer">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
