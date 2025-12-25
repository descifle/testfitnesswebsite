
import { companyName } from "../util/constants";


const HomePage = () => {

    return (
        <main>
            <div className="min-h-screen bg-neutral-950 text-white">
                <section className="relative flex items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/70" />
                    <div className="relative z-10 text-center px-6">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                            Stronger Every Day at {companyName}
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
                            Train with purpose. Build confidence. Join a gym that pushes you beyond your limits.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-2xl text-lg font-semibold shadow-lg">
                                Join Now
                            </button>
                            <button className="px-8 py-4 border border-white/30 rounded-2xl text-lg hover:bg-white/10">
                                Free Trial
                            </button>
                        </div>
                    </div>
                </section>
                <section className="py-20 px-6 max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-14">Why Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-3">Elite Equipment</h3>
                            <p className="text-neutral-400">
                                Top-tier machines and free weights designed for serious performance.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-3">Expert Trainers</h3>
                            <p className="text-neutral-400">
                                Certified professionals dedicated to helping you reach your goals safely.
                            </p>
                        </div>
                        <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-3">Flexible Memberships</h3>
                            <p className="text-neutral-400">
                                No contracts. No pressure. Choose a plan that fits your lifestyle.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-center px-6">
                    <h2 className="text-4xl font-bold mb-6">Start Your Transformation Today</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Your strongest self is waiting. Take the first step with us.
                    </p>
                    <button className="px-10 py-4 bg-black/80 hover:bg-black rounded-2xl text-lg font-semibold">
                        Become a Member
                    </button>
                </section>
            </div>
        </main>
    )
}

export default HomePage;