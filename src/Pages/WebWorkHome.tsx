import { Box } from "@chakra-ui/react";
import SingleWorkHome from "./WebWorkComponent/SingleWorkHome";
import Header from "./HomePageComponents/Component/Header";

// Static demo data
const demoData: Array<{
  title: string;
  description: string;
  techStack?: Array<string>;
  imageURL: Array<string>;
  link: string;
}> = [
  {
    title: "ESTORE",
    description: "A responsive e-commerce platform with authentication, product management, advanced filtering, and checkout. Built with Next.js, Redux Toolkit, Node.js, and MongoDB for performance and scalability.",
    techStack: ["next","node", "mongo", "express",'tailwind'],
    imageURL: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Festore%2Festore1.png?alt=media&token=92a61960-86c0-4ff5-a3a7-5c2f3f1135d3",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Festore%2Festore2.png?alt=media&token=5dfb33de-e28d-4316-b4a8-d62ca12f3d51",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Festore%2Festore4.png?alt=media&token=e04e4245-2ade-4f71-9fd0-ac44c4c85c5f",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Festore%2Festore6.png?alt=media&token=6662fb3c-da99-4d3c-9476-be2efb7fc13b",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Festore%2Festore2.png.png?alt=media&token=109b2132-aa35-4544-8780-8c5a57886c31",
    ],
    link: "https://example.com/portfolio",
  },
  {
    title: "ANTS",
    description: "Contributed to a dynamic page generator, optimized large data collection forms, and enhanced content rendering for a faster, more user-friendly experience with modern UI/UX principles.",
    techStack: ["next", "tailwind"],
    imageURL: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/ants.png?alt=media&token=3f07ec03-58d3-4420-ad14-174d1e9c3029",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Fants2.png?alt=media&token=964353a4-88ac-4fc3-a9e1-408e9edecaec",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Fants1.png?alt=media&token=5030f45f-3354-4c68-abcd-fa5c51f63fb5",
      
    ],
    link: "https://dlf.vercel.app/",
  },
  {
    title: "NETWORK STORE",
    description: "Redesigned a network store with a modern, user-friendly interface using Figma, improving usability and aligning with current design standards.",
    techStack: ["wordpress", "tailwind"],
    imageURL: [
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Fnetwork.webp?alt=media&token=362da1d2-80af-40a9-988f-ec5028ba4954",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Fnetwork2.webp?alt=media&token=ae88a30b-9c6e-4aab-adff-d7331be920f6",
      "https://firebasestorage.googleapis.com/v0/b/portfolio-ad867.appspot.com/o/websites%2Fnetwork3.png?alt=media&token=38ad2aaa-7754-440b-ad20-32fa1f83dc30"
    ],
    link: "https://networkstore.com.np/",
  },
];

function WebWorks() {
  return (
    <>
      <Box className="gradient_bg">
        <Header subTag={false} sectionTitle="Web Projects" key={"1"} />
        <Box
          mt={{ lg: 38, sm: 20, base: 20 }}
          px={{ sm: 0, base: "15px" }}
          className="webWork_wrap"
        >
          {demoData.map((work, index) => (
            <SingleWorkHome
              key={index}
              title={work.title}
              link={work.link}
              description={work.description}
              techStack={work.techStack}
              imageURL={work.imageURL}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default WebWorks;