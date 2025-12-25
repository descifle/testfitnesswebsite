import { CalendarDays, MapPin, Clock } from "lucide-react";

const EventPage = () => {
    const events = [
        {
            title: "Powerlifting Meet",
            date: "March 22, 2026",
            time: "9:00 AM – 4:00 PM",
            location: "Main Training Floor",
            description:
                "Test your strength against the best. Open to all experience levels.",
        },
        {
            title: "HIIT Bootcamp",
            date: "April 5, 2026",
            time: "6:00 PM – 7:30 PM",
            location: "Studio B",
            description:
                "High-intensity group workout led by our elite trainers.",
        },
        {
            title: "Nutrition Workshop",
            date: "April 18, 2026",
            time: "12:00 PM – 2:00 PM",
            location: "Conference Room",
            description:
                "Learn how to fuel your body for performance and recovery.",
        },
    ];


    return (
        <main>
            <div className="min-h-screen bg-neutral-950 text-white">
                <section className="py-20 text-center px-6 bg-gradient-to-r">
                    <h1 className="text-5xl font-extrabold mb-4">Upcoming Events</h1>
                    <p className="text-lg max-w-2xl mx-auto text-white/90">
                        Competitions, classes, and workshops designed to push you further.
                    </p>
                </section>
                <section className="py-20 px-6 max-w-6xl mx-auto">
                    <div className="grid gap-10">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-red-600/20 transition"
                            >
                                <h2 className="text-3xl font-bold mb-3">{event.title}</h2>
                                <p className="text-neutral-400 mb-6">{event.description}</p>
                                <div className="flex flex-wrap gap-6 text-neutral-300 mb-6">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays size={18} />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={18} />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold">
                                    Register
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="py-20 text-center bg-neutral-900 px-6">
                    <h2 className="text-4xl font-bold mb-4">Don’t Miss Out</h2>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                        Events are included with membership. Sign up and be part of the action.
                    </p>
                    <button className="px-10 py-4 bg-red-600 hover:bg-red-700 rounded-2xl text-lg font-semibold">
                        Join the Gym
                    </button>
                </section>
            </div>
        </main>
    )
}

export default EventPage;