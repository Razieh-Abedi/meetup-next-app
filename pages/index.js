import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

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
  return (
    <Fragment>
      <Head>
        <title>Next Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of react and next meetups."
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   ///Fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  ///fetch data from an API

  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const db = client.db();
  const meetupCollection = db.collection("Cluster0");
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          image: meetup.image,
          title: meetup.title,
          address: meetup.address,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 10,
  };
}

export default HomePage;
