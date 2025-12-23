export const websiteName = "abcfitnessstudio";
export const companyName = "ABC Fitness Studio";
export const officialBusinessName = companyName;
export const companyPhoneNumber = "111-222-3333";
export const companyEmail = "abcfitness@abcfitness.com"

export const navPaths = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "gallery",
        name: "Gallery"
    },
    {
        path: "contact",
        name: "Contact"
    },{
        path: "events",
        name: "Events"
    }
];

export const whyChooseUsItems = [
    { title: "Free, At Home Consultations", text: "Request your free quote today and impress your guests this holiday season!" },
    { title: "Top Notch Service", text: "Fast and efficient service – perfect for getting your home holiday-ready!" },
    { title: "Licensed & Insured", text: "Fully insured for your peace of mind." }
]

// export const gallery = Object.values(
//     import.meta.glob("../assets/imgs/gallery/*", {
//       eager: true,
//       query: "url",
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     }) as Record<string, any>,
//   ).map((data) => data.default);