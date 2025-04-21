import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      id="m1"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Chehel_Sotoun_isfahan.jpg/960px-Chehel_Sotoun_isfahan.jpg"
      title="The first meetup"
      address="First meetup address"
      description="This is the first meetup description"
    />
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  ///Fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Chehel_Sotoun_isfahan.jpg/960px-Chehel_Sotoun_isfahan.jpg",
        title: "The first meetup",
        address: "First meetup address",
        description: "This is the first meetup description",
      },
    },
  };
}

export default MeetupDetails;
