import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Chehel_Sotoun_isfahan.jpg/960px-Chehel_Sotoun_isfahan.jpg",
    address: "10, Smith Street",
    description: "This is the first meetup.",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Chehel_Sotoun_isfahan.jpg/960px-Chehel_Sotoun_isfahan.jpg",
    address: "11, Smith Street",
    description: "This is the second meetup.",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  ///fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
